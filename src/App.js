import './App.css';
import {
      Container, 
      Header, 
      Statistic, 
      Grid, 
      Segment, 
      Icon,
      Form,
      Button} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {createStore} from 'redux';

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const store = createStore((state = initialEntries, action) => {
    console.log("ACTION::",action.type);
    switch(action.type){
      case 'ADD_ENTRY': 
        const newEntries = entries.concat({...action.payload})
        return newEntries;
        break;
      

      default:
        break;

    }
    return state;

  })

  console.log("STORE BEFORE", store.getState());

  const payload = {
    id: 5,
    title: 'Shoes',
    value: 100.00,
    isExpense: true
  }

  store.dispatch({type: 'ADD_ENTRY', payload})
  
  useEffect(() => {
    if(!isOpen && entryId) {
      const currentIndex = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[currentIndex].title = title;
      newEntries[currentIndex].value = value;
      newEntries[currentIndex].isExpense = isExpense;
      setEntries(newEntries);
      setTitle('');
      setValue('');
      setIsExpense(true);
    }
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map(entry => {
      if(entry.isExpense){
        totalExpenses += parseInt(entry.value)
      }
      else {
        return totalIncomes += parseInt(entry.value)
      }
    })

    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpensesTotal(totalExpenses);
  }, [entries])

  function onDeleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const addEntry = (title, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      title,
      value,
      isExpense
    })
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setTitle('');
    setValue('');
    setIsExpense(true); 
  }

  function editEntry(id){
    if(id) {
      const currentEntry = entries.find(entry => entry.id === id)
      setEntryId(id);
      setTitle(currentEntry.title);
      setValue(currentEntry.value);
      setIsExpense(currentEntry.isExpense);
      setIsOpen(true)
    }
  }

  return (
    <Container>
      <MainHeader title="Budget App" />
      <DisplayBalance 
        size="small"
        title="Your Balance:" 
        value={total}
        color="black"
        />

      <MainHeader type="h3" title="History" />
      <DisplayBalances
        expensesTotal={expensesTotal}
        incomeTotal={incomeTotal} />

      <MainHeader type="h3" title="Add New Transaction" />
      <EntryLines 
        entries={entries}
        deleteEntry={onDeleteEntry}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
        />

      <NewEntryForm
        addEntry={addEntry}
        title={title}
        value={value}
        isExpense={isExpense}
        setTitle={setTitle}
        setValue={setValue}
        setIsExpense={setIsExpense} />

      <ModalEdit 
        title={title}
        value={value}
        isExpense={isExpense}
        setTitle={setTitle}
        setValue={setValue}
        setIsExpense={setIsExpense}
        isOpen={isOpen}
        setIsOpen={setIsOpen} />
      
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    title: "Work Income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    title: "Water Bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    title: "Rent",
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    title: "Power Bill",
    value: 50.00,
    isExpense: true
  }
]
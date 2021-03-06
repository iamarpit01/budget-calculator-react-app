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
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector(state => state.entries);
  const {isOpen, id} = useSelector(state => state.modals);
  
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index]);
  }, [isOpen, id])

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
        />

      <NewEntryForm />

      <ModalEdit
        isOpen={isOpen}
        {...entry} />
      
    </Container>
  );
}

export default App;

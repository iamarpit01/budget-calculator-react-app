var initialEntries = [
    {
      id: 1,
      title: "Office Income",
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

const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch(action.type){
        case 'ADD_ENTRY': 
            newEntries = state.concat({...action.payload})
        return newEntries;
        
        case 'REMOVE_ENTRY': 
            newEntries = state.filter(entry => entry.id !== action.payload.id);
        return newEntries;
        
        case 'UPDATE_ENTRY': 
            newEntries = [...state];
            const newEntriesIndex = state.findIndex(entry => entry.id === action.payload.id);
            newEntries[newEntriesIndex] = { ...action.payload.entry }
            return newEntries;

        default:
        break;
    }
    return state;
}

export default reducer
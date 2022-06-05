import entryTypes from '../actions/entries.actions';

var initialEntries = []

const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch(action.type){
        case entryTypes.POPULATE_ENTRIES: 
            return [
              ...state,
              ...action.payload
            ]
        case entryTypes.ADD_ENTRY: 
            newEntries = state.concat({...action.payload})
        return newEntries;
        
        case entryTypes.REMOVE_ENTRY_RESULTS: 
            newEntries = state.filter(entry => entry.id !== action.payload.id);
        return newEntries;
        
        case entryTypes.POPULATE_ENTRIES_DETAILS:
        case entryTypes.UPDATE_ENTRY: 
            newEntries = [...state];
            const newEntriesIndex = state.findIndex(entry => entry.id === action.payload.id);
            newEntries[newEntriesIndex] = { ...newEntries[newEntriesIndex], ...action.payload.entry }
            return newEntries; 

        default:
        break;
    }
    return state;
}

export default reducer
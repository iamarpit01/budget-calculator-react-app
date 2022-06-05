const types = {
  GET_ALL_ENTRIES: 'GET_ALL_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES',
  POPULATE_ENTRIES_DETAILS: 'POPULATE_ENTRIES_DETAILS',
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  REMOVE_ENTRY_RESULTS: 'REMOVE_ENTRY_RESULTS',
  UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export const addEntryRedux = payload => {
  return {type: types.ADD_ENTRY, payload }
}

export const removeEntryRedux = id => {
  return {type: types.REMOVE_ENTRY, payload: {id}}
}

export const updateEntryRedux = (id, entry) => {
  return {type: types.UPDATE_ENTRY, payload: {id, entry}}
}

export const getAllEntries = () => {
  return {type: types.GET_ALL_ENTRIES}
}

export const populateEntries = entries => {
  return {type: types.POPULATE_ENTRIES, payload: entries}
}

export const populateEntryDetail = (id, entry) => {
  return {type: types.POPULATE_ENTRIES_DETAILS, payload: {id, entry}}
}

export default types;
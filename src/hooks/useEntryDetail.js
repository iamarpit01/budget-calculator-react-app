import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions'
import { closeEditModalRedux } from '../actions/modals.actions'

export const useEntryDetail = (tit = "", val = "", isExp = true) => {
    const [title, setTitle] = useState(tit)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)
    const dispatch = useDispatch();

    useEffect(() => {
      setTitle(tit);
      setValue(val);
      setIsExpense(isExp);
    }, [tit, val, isExp])

    function updateEntry(id) {
      console.log("Callingggg update entry")
      dispatch(
        updateEntryRedux(
          id,
          {
            id,
            title,
            value,
            isExpense
          },
        )
      )

      dispatch(closeEditModalRedux());
      
      resetEntry();
    }
  
    function addEntry(){
      dispatch(addEntryRedux({
            id: 5,
            title,
            value,
            isExpense
          }
        )
      )
      
      resetEntry();
    }

  function resetEntry() {
    setTitle('');
    setValue('')
    setIsExpense(true);
  }
    
  return {
      title,
      setTitle,
      value,
      setValue,
      isExpense, 
      setIsExpense,
      addEntry,
      updateEntry
  }
}

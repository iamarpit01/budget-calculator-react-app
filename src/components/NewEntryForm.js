import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { addEntryRedux } from '../actions/entries.actions'
import { useEntryDetail } from '../hooks/useEntryDetail'
import ButtonGroups from './ButtonGroups'
import EntryForm from './EntryForm'

function NewEntryForm() {
  const {
    title,
    setTitle,
    value,
    setValue,
    isExpense, 
    setIsExpense
} = useEntryDetail();
const dispatch = useDispatch();

  function addEntry(){
    dispatch(addEntryRedux({
          id: 5,
          title,
          value,
          isExpense
        }
      )
    )
  }

    return (
    <Form unstackable>
        <EntryForm
          title={title}
          value={value}
          isExpense={isExpense}
          setTitle={setTitle}
          setValue={setValue}
          setIsExpense={setIsExpense} />

        <ButtonGroups 
          title={title}
          value={value}
          isExpense={isExpense}
          addEntry={addEntry} />
    </Form>
    )
}

export default NewEntryForm

import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import ButtonGroups from './ButtonGroups'
import EntryForm from './EntryForm'

function NewEntryForm({title, value, isExpense, setTitle, setValue, setIsExpense, addEntry}) {
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

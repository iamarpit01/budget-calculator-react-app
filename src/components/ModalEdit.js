import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import NewEntryForm from './NewEntryForm';

function ModalEdit({isOpen, setIsOpen, title, value, isExpense, setTitle, setValue, setIsExpense}) {
  return (
      <Modal open={isOpen}>
          <Modal.Header>
              Edit Entry
          </Modal.Header>
          <Modal.Content>
          <Form unstackable>
              <EntryForm
                title={title}
                value={value}
                isExpense={isExpense}
                setTitle={setTitle}
                setValue={setValue}
                setIsExpense={setIsExpense}  />
            </Form>
          </Modal.Content>
          <Modal.Actions>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
              <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
          </Modal.Actions>
      </Modal>
  );
}

export default ModalEdit;

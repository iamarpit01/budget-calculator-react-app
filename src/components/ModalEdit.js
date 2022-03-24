import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'semantic-ui-react';
import { closeEditModalRedux } from '../actions/modals.actions';
import EntryForm from './EntryForm';
import {useEntryDetail} from '../hooks/useEntryDetail';
import NewEntryForm from './NewEntryForm';

function ModalEdit({
    isOpen,
    title, 
    value, 
    isExpense,
    id
    }) {

    const dispatch = useDispatch();
    const entryUpdate = useEntryDetail(title, value, isExpense);
    return (
      <Modal open={isOpen}>
          <Modal.Header>
              Edit Entry
          </Modal.Header>
          <Modal.Content>
          <Form unstackable>
              <EntryForm
                title={entryUpdate.title}
                value={entryUpdate.value}
                isExpense={entryUpdate.isExpense}
                setTitle={entryUpdate.setTitle}
                setValue={entryUpdate.setValue}
                setIsExpense={entryUpdate.setIsExpense}  />
            </Form>
          </Modal.Content>
        <Modal.Actions>
              <Button onClick={() => dispatch(closeEditModalRedux())}>Close</Button>
              <Button onClick={() => entryUpdate.updateEntry(id)}>Ok</Button>
          </Modal.Actions>
      </Modal>
  );
}

export default ModalEdit;

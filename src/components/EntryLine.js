import React, { Fragment, useState } from 'react'
import { Segment, Grid, Icon, Modal } from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import {removeEntryRedux} from '../actions/entries.actions';
import {openEditModalRedux} from '../actions/modals.actions'

function EntryLine({id, title, value, isExpense = false}) {
  
  const dispatch = useDispatch();
  return (
      <Fragment>
        <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{title}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={() => dispatch(openEditModalRedux(id))} />
              <Icon name='trash' bordered onClick={() => dispatch(removeEntryRedux(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </Fragment>
    )
}

export default EntryLine

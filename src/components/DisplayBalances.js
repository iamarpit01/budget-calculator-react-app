import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({expensesTotal, incomeTotal}) {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
              <Grid.Column>
                <DisplayBalance 
                  size="tiny"
                  title="Income:" 
                  color="green"
                  value={incomeTotal} />
              </Grid.Column>
              <Grid.Column>
                <DisplayBalance 
                  size="tiny"
                  title="Expense:" 
                  color="red"
                  value={expensesTotal} />
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances

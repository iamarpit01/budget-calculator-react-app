import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

function ButtonGroups({addEntry, title, value, isExpense}) {
    return (
        <Fragment>
          <Button>Cancel</Button>
          <Button primary onClick={() => addEntry(title, value, isExpense) }>Ok</Button>
        </Fragment>
    )
}

export default ButtonGroups

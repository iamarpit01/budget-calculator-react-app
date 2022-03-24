import React, { Fragment } from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries}) {
    return (
        <Fragment>
            { entries.map(entry => (
              <EntryLine
                key={entry.id}
                {...entry}
                />
            ))
          }
        </Fragment>
    )
}

export default EntryLines

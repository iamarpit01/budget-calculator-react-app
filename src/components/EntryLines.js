import React, { Fragment } from 'react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry, editEntry, isOpen, setIsOpen}) {
    return (
        <Fragment>
            { entries.map(entry => (
              <EntryLine
                key={entry.id}
                {...entry}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
                />
            ))
          }
        </Fragment>
    )
}

export default EntryLines

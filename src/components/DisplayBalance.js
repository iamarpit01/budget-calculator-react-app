import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({title, value, color, size}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label>{title}</Statistic.Label>
            <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance

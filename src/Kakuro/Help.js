import React from 'react'
import './style.sass'
import { Matrix } from './PropTypes'
import { Sequences, rectangleMatrixEnd } from './utils'
import { Grid } from './Grid'
import _ from 'lodash'


const fromRowToCounters = ( row ) => {

    return _
            .remove( Sequences( row ), e => e.value.type !== 0 )
            .map(({count}) => ({ value : count }))
}


const Help = ({ field, ...rest} ) => {

    let mappedField = field.map( r => fromRowToCounters( r ) )

    const parsedField = rectangleMatrixEnd( mappedField, { value : 0 } )

    return(
        <Grid grid={ parsedField } {...rest}/>
    )
}

Help.propTypes = {
    field : Matrix.isRequired,
}

export { Help }
export default Help
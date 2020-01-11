import React, { useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import './style.sass'
import { Matrix } from './PropTypes'
import Cell from './Cell'


const Grid = ({ grid, onCellClick, Cell, ...rest }) => {

    const [ keys ] = useState(grid.map( r => r.map( i => uuid() ) ) )

    return(
        <div className='grid' {...rest} >
            { grid.map( ( row, i ) => (
                <div key={keys[i][0] + 'r'} className='row'>
                    {row.map( (elem, j ) => (<Cell onClick={onCellClick && (e => onCellClick(i, j, elem)) } key={ keys[i][j] }{...elem}/>) )}
                </div>) )
            }
        </div>)
}

Grid.propTypes = {
    grid : Matrix.isRequired,
    Cell : PropTypes.elementType,
    onCellClick : PropTypes.func,
}

Grid.defaultProps = {
    Cell,
}


export { Grid }
export default Grid

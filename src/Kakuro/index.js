import React, { Component } from 'react'
import _ from 'lodash'

import './style.sass'
import { Grid } from './Grid'
import { Help } from './Help'
import { rotate90clockwise } from './utils'
import produce from 'immer'

import { WithTools } from './Tools'

class KakuroGame extends Component {

    static propTypes = {
        // currentTool :
    }
    state = {
        field : [
            [ { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, ],
            [ { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, ],
            [ { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, ],
            [ { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, ],
            [ { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, { type : 0, }, ],
        ],
        level_field : [
            [ { type : 0, }, { type : 0, }, { type : 1, }, { type : 1, }, { type : 0, }, ],
            [ { type : 0, }, { type : 0, }, { type : 1, }, { type : 0, }, { type : 0, }, ],
            [ { type : 0, }, { type : 1, }, { type : 1, }, { type : 1, }, { type : 0, }, ],
            [ { type : 1, }, { type : 1, }, { type : 1, }, { type : 1, }, { type : 1, }, ],
            [ { type : 0, }, { type : 1, }, { type : 0, }, { type : 1, }, { type : 1, }, ],
        ]
    }

    onCellClick = ( i, j, cell ) => {
        // console.log( i, j , cell )
        this.setState(
            state => { state.field[i][j] = this.props.currentTool( cell ); return state },
            this.onTurnEnd
        )
    }

    onTurnEnd = () => {
        if( _.differenceWith(this.state.field, this.state.level_field, _.isEqual ).length == 0 )
            console.log( 'You Won' )
    }
    render() {
        return(
            <div className='kakuro'>
                <Help field={ this.state.level_field }/>
            <div>
                <Help className='grid vertical'
                      field={ rotate90clockwise( _.cloneDeep( this.state.level_field ) ) }/>
            <Grid onCellClick={this.onCellClick} grid={ this.state.field }/>
            </div>
            </div>
        )
    }
}

export default WithTools( KakuroGame )
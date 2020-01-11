import './style.sass'
import React, { Component } from 'react'
import { CELL_STATES } from './GlobalVars'

class KakuroCell extends Component {

    render() {
        return(
            <div
                {...this.props}
                className={ `cell ${ CELL_STATES[ this.props.type ] }` }>
                {this.props.value ? this.props.value : ''}
            </div>
        )
    }
}

export default KakuroCell
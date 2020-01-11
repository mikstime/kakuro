import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
export const EmptyTool = cell => {
    cell.type = 0
    return cell
}

export const CrossTool = cell => {
    cell.type = 1
    return cell
}

export const PickTool = cell => {
    cell.type = 2
    return cell
}

export const MarkTool = cell => {
    cell.type = 3
    return cell
}

export const ToolList = ({tools, onClick =() => {} }) =>
    (<div className='tools-list'>
        {tools.map( tool => < ToolElement name={tool.name} onClick={() => onClick( tool.tool )}/>)}
    </div>)
export const ToolElement = ({name, ...props}) => (
    <div className='tool' {...props}>
        {name}
    </div>
)

export const WithTools = (WrappedComponent) => {

    return class extends Component {

        static propTypes = {
            tools : PropTypes.arrayOf(
                PropTypes.shape({
                    tool : PropTypes.func,
                    name : PropTypes.string,
                })
            )
        }
        static defaultProps = {
            tools : [
                {
                    tool : EmptyTool,
                    name : "Clear",
                },
                {
                    tool : CrossTool,
                    name : "Cross",
                },
                {
                    tool : PickTool,
                    name : "Pick",
                },
                {
                    tool : MarkTool,
                    name : "Mark",
                },
            ]
        }
        state = {
            currentTool : CrossTool
        }
        onClick = (tool) => {
            console.log( tool )
            this.setState({ currentTool : tool })
        }
        render() {
            return(
                <Fragment>
                    <WrappedComponent currentTool={ this.state.currentTool }/>
                    <ToolList onClick={this.onClick} tools={this.props.tools}/>
                </Fragment>
            )
        }
    }
}
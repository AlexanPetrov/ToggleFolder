import React, { Component } from 'react'

export default class Folder extends Component {
    
    constructor (props) {
        super(props)
        this.state = { toggle: true }
    }

    folder = () => { this.setState({toggle: !this.state.toggle}) }

    render() {
        return (
            <div>
                <p>Home</p>
                <button type = "button" onClick = {this.folder}>Toggle</button>
                {(this.state.toggle) ?  <ul>
                                            <li>File 1</li>
                                            <li>File 2</li>
                                            <li>File 3</li>
                                        </ul> : undefined}
            </div>
        )
    }
}

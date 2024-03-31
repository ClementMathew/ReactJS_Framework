import React, { Component } from 'react'

export default class Introduction extends Component {

    name = 'Clement'

    render() {
        return (
            <div>Class Based Component by {this.name}</div>
        )
    }
}

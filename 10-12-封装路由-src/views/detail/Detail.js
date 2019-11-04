import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        id: this.props.location.state.id
    }
    render() {
        return (
            <div>
                detail
            </div>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types';
/**
 * 校验props
 * npm i -S prop-types
 * import PropTypes from 'prop-types';
 * static propTypes = {
        title: PropTypes.string.isRequired
    }
 */
export default class List extends Component {

    static propTypes = {
        title: PropTypes.number,
        id: PropTypes.number.isRequired
    }

    render() {
        let { title, id, desc, time, toDetail } = this.props
        return (
            <div className="list-item" key={id} onClick={() => toDetail(id)}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <p>{time}</p>
            </div>
        )
    }
}

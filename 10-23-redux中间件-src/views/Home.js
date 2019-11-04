import React, { Component } from 'react'
import { connect } from 'react-redux'

// UI组件
class Home extends Component {
    link = () => {
        this.props.history.push('/citylist')
    }
    render() {
        return (
            <div>
                <button onClick={this.link}>{this.props.currentCity}</button>
            </div>
        )
    }
}


// 容器组件处理逻辑
let mapStateToProps = state => {
    return {
        currentCity: state.cityReducer.currentCity
    }
}
let mapDispatchToProps = dispatch => {
    return {}
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home

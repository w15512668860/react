import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getList, getListPromise } from '../actions/action'


class Citylist extends Component {

    componentDidMount(){
        this.props.setCityList()
    }

    link = (city) => {
        this.props.setCurrentCity(city)
        this.props.history.goBack();
    }

    render() {
        let { cityList } = this.props
        return (
            <div className="city-wrap">
                {cityList.map(v => (
                    <div key={v.type}>
                        <h2>{v.type}</h2>
                        <p>
                            {v.list.map(city => (
                                <span onClick={() => this.link(city)} key={city}>{city}</span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        cityList: state.cityReducer.cityList
    }
}


let mapDispatchToProps = dispatch => {
    return {
        setCityList(){
            // redux-thunk dispatch 接收函数
            dispatch(getList)

            // redux-promise dispatch接收promise
            // dispatch(getListPromise())
        },
        setCurrentCity(city){
            dispatch({type: 'SET_CITY', city})
        }
    }
}



Citylist = connect(mapStateToProps, mapDispatchToProps)(Citylist)

export default Citylist

import React, { Component } from 'react'
import Header from '../../componenst/header/Header'
import Swiper from '../../componenst/swiper/Swiper'
import ListCom from '../../componenst/List'

import axios from 'axios'

export default class List extends Component {

    state = {
        swiperList: [],
        list: []
    }

    componentDidMount(){
        axios.get('/swiperList').then(res => {
            this.setState({
                swiperList: res.data.values
            })
        });

        axios.get('/list').then(res => {
            this.setState({
                list: res.data.values
            })
        });

    }

    toDetail = (id) => {
        this.props.history.push({
            pathname: '/detail',
            state: { id }
        })
    }

    render() {
        let { swiperList, list } = this.state;
        return (
            <div>
                <Header />
                <Swiper>
                    {swiperList.map((v, i) => (
                        <div className="my-swiper-slide" key={i}>
                            <img src={v} alt=""/>
                        </div>
                    ))}
                </Swiper>

                {list.map(v => <ListCom key={v.id} toDetail={this.toDetail} {...v} />)}
            </div>
        )
    }
}

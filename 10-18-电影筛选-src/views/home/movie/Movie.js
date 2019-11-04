import React, { Component } from 'react'
import axios from 'axios'

export default class Movie extends Component {

    state = {
        list: [],
        allList: [],
        addresslist: ['全部地区','大陆', '香港', '韩国', '美国', '日本'],
        typelist: ['全部类型', '惊悚', '爱情', '动作', '警匪', '励志'],
        curAddress: 0,
        curType: 0,
    }

    componentDidMount(){
        axios.get('/movielist').then(r => {
            this.setState({
                list: [...r.data.values],
                allList: [...r.data.values],
            })
        })
    }

    filterAddress = (i) => {
        this.setState({
            curAddress: i,
        }, this.filter)
    }

    filterType = (i) => {
        this.setState({
            curType: i,
        }, this.filter)
    }

    filter = () => {
        let { curType, curAddress, addresslist, typelist} = this.state;
        let list = this.state.allList.filter(v => {
            if (curType == 0 || v.type == typelist[curType]) {
                if (curAddress == 0 || v.address == addresslist[curAddress]) {
                    return v
                }
            }
        })
        this.setState({
            list: [...list],
        })
    }

    render() {
        let { curAddress, curType } = this.state;
        return (
            <div className="movie-wrap">
                <div className="movie-top">
                    <p>
                        {this.state.addresslist.map((v, i) => (
                            <span className={curAddress === i ? 'active' : ''} onClick={() => this.filterAddress(i)} key={i}>{v}</span>
                        ))}
                    </p>
                    <p>
                        {this.state.typelist.map((v, i) => (
                            <span className={curType === i ? 'active' : ''} onClick={() => this.filterType(i)}  key={i}>{v}</span>
                        ))}
                    </p>
                </div>
                <div className="movie-con">
                    <div className="movie-con-w">
                        {this.state.list.map((v, i) => (
                            <div key={i} className="movie-item">
                                <h3>{v.title}</h3>
                                <p>{v.address}</p>
                                <p>{v.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

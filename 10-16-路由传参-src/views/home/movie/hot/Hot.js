import React, { Component } from 'react'
import axios from 'axios'
export default class Hot extends Component {

    state = {
        movielist: []
    }

    componentDidMount(){
        axios.get('/movieList').then(r => {
            this.setState({
                movielist: r.data.values.movieList.map(v => {
                    v.img = v.img.replace('w.h', '128.180');
                    return v
                })
            })
        })
    }

    link = (info) => {
        console.log(info)
        // js方式跳转
        this.props.history.replace({ pathname: `/detail/${info.id}`,
            query: {id: info.id},
            state: {id: info.id},
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.movielist.map(v => (
                    <div onClick={() => this.link(v)} key={v.id} style={{border: '1px solid red', padding: '20px'}}>
                        <h3>{v.nm}</h3>
                        <img src={v.img} alt=""/>
                        <p>{v.star}</p>
                    </div>
                ))}
            </div>
        )
    }
}

import React, { Component } from 'react'
import './App.scss'
import './mock/index'
import axios from 'axios'


class Goods extends Component {
    render(){
        let props = this.props;
        // 根据状态判断是否添加active
        let active = props.state ? 'active' : '';
        let span = props.state ? <span onClick={() => props.remove(props.id)}>✅</span> : <span onClick={() => props.add(props.id)}>+</span>;
        return (
            <div className={`list-item ${active}`}>
                <img src={props.src} alt=""/>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <button>add cart</button>
                {span}
            </div>
        )
    }
}


class Compare extends Component {
    render(){
        let { compareList, showDialog, changeShow } = this.props;
        return (
            <div className="compare-wrap" style={{display: showDialog ? 'block' : 'none'}}>
                <div className="compare" >
                    {compareList.map(v => (
                        <div className="compare-item" key={v.id}>
                            <div className="img-wrap">
                                <img src={v.src} alt=""/>
                            </div>
                            <h2>{v.title}</h2>
                            <p>{v.price}</p>
                            <p>{v.alcohol}</p>
                        </div>
                    ))}
                </div>
                <span className="close" onClick={() => changeShow(false)}>X</span>
            </div>
            
        )
    }
}


class Header extends Component {
    render(){
        let { compareList, remove, changeShow } = this.props;
        return (
            <header>
                <button disabled={compareList.length <= 1} onClick={() => changeShow(true)}>Compare</button>
                <ul>
                    {compareList.map(v => (
                        <li key={v.id}>
                            <img src={v.src} alt=""/>
                            <span onClick={() => remove(v.id)}>X</span>
                        </li>
                    ))}
                </ul>
            </header>
        )
    }
}



export default class App extends Component {

    state = {
        // 所有数据
        list: [],
        // 对比列表
        compareList: [],
        showDialog: false
    }

    componentDidMount(){
        axios.get('/list').then(r => {
            // 给数据添加是否选中状态字段
            let list = r.data.values.map(v => {
                v.state = false;
                return v
            });
            this.setState({
                list: list
            })
        })
    }

    changeShow = (flag) => {
        this.setState({
            showDialog: flag
        })
    }

    add = (id) => {
        // 拷贝一个新数组
        let compareList = [...this.state.compareList];
        // 从对比列表里查找有没有这一项
        let item = compareList.filter(v => v.id === id);
        // 判断是否大于3
        if (this.state.compareList.length >= 3) {
            return false
        }
        // 去重
        if (item.length >= 1) {
            return false
        }
        // 从所有数据里查找到点击的当前项
        let good = this.state.list.filter(v => v.id === id)[0];
        // 改变数据状态
        good.state = true;
        // 添加到对比列表
        compareList.push(good);
        this.setState({
            // 覆盖对比列表
            compareList: compareList
        })
    }

    remove = (id) => {
        // 拷贝一个新数组
        let compareList = [...this.state.compareList];
        // 查找当先点击的下标
        let index = compareList.findIndex(v => v.id === id);
        compareList.splice(index, 1);

        // 从所有数据里查找到点击的当前项
        let good = this.state.list.filter(v => v.id === id)[0];
        // 拷贝一个新数组
        let list = [...this.state.list];
        // 找到列表里当前项的下标
        let itemIndex = list.findIndex(v => v.id === id);
        // 修改选中状态
        good.state = false;
        // 替换当前项
        list.splice(itemIndex, 1, good)

        this.setState({
            compareList: compareList,
            list: list
        });

    }

    render() {
        let { list, compareList, showDialog } = this.state
        return (
            <div className="wrap">
                {compareList.length > 0 ?
                    <Header changeShow={this.changeShow} compareList={compareList} remove={this.remove} />
                : null
                }
                <div className="list-wrap">
                    {list.map((v, i) => <Goods key={i} remove={this.remove} add={this.add} {...v} />)}
                </div>
                <Compare changeShow={this.changeShow} showDialog={showDialog} compareList={compareList} />
            </div>
        )
    }
}

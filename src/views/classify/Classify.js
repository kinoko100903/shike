import React, { Component } from 'react'

import {ClassifyCon,ClassifyStyle,ClassifyStyleSearch,ClassifyStyleNav} from "./styledComponents"

import { Icon, Grid } from 'antd-mobile';

import { BrowserRouter, HashRouter as Router, Route, Link, NavLink ,Switch} from "react-router-dom"

import ClassifyHotSell from "@components/classify/classifyhotsell"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "@mapprops/classify/index.js"

 class Classify extends Component {
  render() {
    // console.log( this.props)
    let ClassifyList = this.props.ClassifyList
    return (
      <ClassifyCon>
        <ClassifyStyle>
          <ClassifyStyleSearch>
             <div>
                <Icon type="search" size="xxs"/>
               <input type="text" placeholder= "搜索/商品/品牌/类别"/>
             </div>
           </ClassifyStyleSearch>
           <ClassifyStyleNav>
           <Router>          
             <ul>
               {
                 ClassifyList.map((item,index)=>(
                  <li key = {item.ID}><NavLink to={'/classify/classifyhotsell?id='+index}>{item.Name}</NavLink></li>
                  ))
               }                                                          
             </ul>
             <Route path = "/classify/classifyhotsell" component ={ClassifyHotSell}></Route>
             </Router>
           </ClassifyStyleNav>
        </ClassifyStyle>     
      </ClassifyCon>
    )
  }
  //调用mapdispatchtoprops中的方法:
  componentDidMount(){
    this.props.getcategorylist()
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Classify);
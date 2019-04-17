import React, { Component } from 'react'

import {ClassifyCon,ClassifyStyle,ClassifyStyleSearch,ClassifyStyleNav} from "./styledComponents"

import { Icon, Grid } from 'antd-mobile';

import { BrowserRouter, HashRouter as Router, Route, Link, NavLink ,Switch} from "react-router-dom"

import ClassifyHotSell from "@components/classify/classifyhotsell"
import ClassifyColor from "@components/classify/classifycolor"
import ClassifyNursing from "@components/classify/classifynursing"


export default class Classify extends Component {
  render() {
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
               <li><NavLink to="/classify/classifyhotsell">隐形眼镜</NavLink></li>
               <li><NavLink to="/classify/classifycolor">彩色隐形眼镜</NavLink></li>
               <li><NavLink to="/classify/classifynursing">护理用品</NavLink></li>
             </ul>
             <Route path = "/classify/classifyhotsell" component ={ClassifyHotSell}></Route>
             <Route path = "/classify/classifycolor" component ={ClassifyColor}></Route>
             <Route path = "/classify/classifynursing" component ={ClassifyNursing}></Route>
             </Router>
           </ClassifyStyleNav>
        </ClassifyStyle>     
      </ClassifyCon>
    )
  }
}

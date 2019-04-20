import React, { Component } from 'react'

import { ClassifyStyleHotSell } from "./styleComponents"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "@mapprops/classify/index.js"

const url = require('url')


class ClassifyHotSell extends Component {
  constructor() {
    super()
    this.state = {
      childList: '',
      ChildId:0
    }
  }
  render() {
    let ClassifyList = this.props.ClassifyList
    console.log(ClassifyList['_tail'])
    let { childList ,ChildId} = this.state
    // ClassifyList.map((item, index) => {
    //   childList = item.ChildList    
    // })
    childList = ClassifyList['_tail']  
    ChildId = url.parse(this.props.location.search,true).query
    console.log(childList)
    console.log(ChildId)
    // console.log(url.parse(this.props.location.search,true).query)
    return (
      <div>
      {/* <ClassifyStyleHotSell>
          <div>
          <span>. </span>           
            <p>热销品牌</p>
          </div>
          <ul>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
          </ul>
      </ClassifyStyleHotSell> */}
        {/* {
          childList?childList.map((item, index) => (
            <ClassifyStyleHotSell  key = {index}>
           <div>             
                <span>. </span>
                <p>{item.Name}</p>
            </div>
            <ul>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
          </ul>
             </ClassifyStyleHotSell>
          )):''
        } */}
                {/* {
          childList?childList.map((item, index) => (
            <ClassifyStyleHotSell  key = {index}>
           <div>             
                <span>. </span>
                <p>{item.Name}</p>
            </div>
            <ul>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
            <li><a href="">库博</a></li>
          </ul>
             </ClassifyStyleHotSell>
          )):''
        } */}

      </div>
    )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ClassifyHotSell)
//引入action:
import {getcategorylistAction} from "@actions/actionCreator"

//引入mapstatetoprops方法,将state通过映射的方法返回给props
export const mapStateToProps = (state)=>({
    ClassifyList:state.getIn(["Classify","ClassifyList"]),
})
//引入mapdispatchtoprops方法,将dispatch通过映射的方法返回给props
export const mapDispatchToProps = (dispatch)=>({
    //定义一个获取接口的方法-->在classify组件的componentDidMount中使用:
    getcategorylist(){
       //发送action给store,在store中做中间件的处理:
       dispatch(getcategorylistAction())

    }
})
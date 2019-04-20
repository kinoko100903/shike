import {getCategoryList} from "@/apis/classify.js"

import {action} from "./index.js"

export const getcategorylistAction  = ()=>{
    //在此处可以实现ajax的请求:
    return async (dispatch)=>{
        let data = await getCategoryList();
        dispatch(action("CATE_LIST",data.Data))
        //diaspatch发出去的action在reducers中使用:
        console.log(data)
    }
   
}



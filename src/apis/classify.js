import {http} from "@/utils/http"

// let data={
//     sourcechannel: "WeiXin"
// }
 
export const getCategoryList = ()=>http("POST","/b2c_base/common/getcategorylist",{sourcechannel: "WeiXin"})
//在actionCreator.js 中使用这个API

//http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
//https://m.vsigo.cn/b2c_item/itemmessage/getfarebuymessage
//https://m.vsigo.cn/b2c_base/common/getcategorylist

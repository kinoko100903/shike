import immutable from "immutable"

const defaultState = immutable.fromJS({
   ClassifyList:[],
})

export default (state=defaultState,action)=>{
   switch(action.type){
      case "CATE_LIST" :
        return state.updateIn(["ClassifyList"],x=>x.concat(action.value))
   }
   return state;
}
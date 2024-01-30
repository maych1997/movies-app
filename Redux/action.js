import { SET_DATA, SET_TRAILER_ID, SET_TREND } from "./reducer";

 export function setData(data) {
    return{
    type: SET_DATA,
    payload:data
    }
  }
  export function setTrend(trend) {
    return{
    type: SET_TREND,
    payload:trend
    }
  }
  export function setDiscover(discover){
    return{
      type:SET_TRAILER_ID,
      payload:discover,
    }
  }
  
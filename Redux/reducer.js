export const SET_DATA='SET_DATA';
export const SET_TREND='SET_TREND';
export const SET_DISCOVER='SET_DISCOVER';
const initialState = {
    data: [],
    trend: 'day',
    discover:'movie',
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DATA:
        return {
            ...state,
            data:action.payload
            };
      case SET_TREND:
        return {
            ...state,
            trend:action.payload
            };
      case SET_DISCOVER:
        return {
          ...state,
          discover:action.payload
        }
      default:
        return state;
    }
  };
  
  export default Reducer;
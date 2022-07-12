import * as  ActionTypes from "../actions/actions"

export const  recommanded = (movies)=>{
  return {
    type:ActionTypes.ADD_RECOMMANDED,
    movies:movies
  }
}

export const  newDisney = (movies)=>{
    return {
      type:ActionTypes.ADD_NEW_DISNEY,
      movies:movies
    }
  }

  export const  trends = (movies)=>{
    return {
      type:ActionTypes.ADD_TREND,
      movies:movies
    }
  }

  export const  original = (movies)=>{
    return {
      type:ActionTypes.ADD_ORIGINAL,
      movies:movies
    }
  }
  export const  loadingStart = ()=>{
    return {
      type:ActionTypes.START_LOADING,
    }
  }

  export const  loadingEnd = ()=>{
    return {
      type:ActionTypes.LOADING_END,
    }
  }
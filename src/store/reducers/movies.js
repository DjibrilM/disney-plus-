import * as actionsType from "../actions/actions";

const initialState = {
    recommand:[],
    trends:[],
    newDisney:[],
    original:[],
    isLoading:false,
}


const Movies = (state = initialState, actions)=>{
switch (actions.type) {
  case actionsType.ADD_RECOMMANDED :
    const RecprevState = state.recommand;
    const RecNewState = RecprevState.concat(actions.movies)

    return {
        ...state,
        recommand:RecNewState
    }
    break;

  case actionsType.ADD_NEW_DISNEY :
    const NewDisprevState = state.newDisney;
    const newNewDisprevState = NewDisprevState.concat(actions.movies);
    return {
      ...state,
      newDisney:newNewDisprevState
    }
    break

    case actionsType.ADD_TREND :
        const trendpPevState = state.trends;
        const NewTrendpPevState = trendpPevState.concat(actions.movies)
        return {
          ...state,
          trends:NewTrendpPevState
        }
    case actionsType.ADD_ORIGINAL :    
        const originalpPevState = state.original;
        const newOriginalpPevState = originalpPevState.concat(actions.movies);
        return {
          ...state,
            original:newOriginalpPevState,
        }
    case actionsType.START_LOADING:
       return {
        ...state,
        isLoading:true
       }
    case actionsType.LOADING_END:
        return {
         ...state,
         isLoading:false
  
        }
    default:
        return state;
        break;
}
}

export default Movies
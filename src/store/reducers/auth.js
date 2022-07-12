import * as actionsType from "../actions/actions";

const initialState = {
    name:null,
    photo:null,
    email:null
}

const auth = (state = initialState, actions)=>{

    switch (actions.type) {

        case actionsType.ON_LOGIN :

            console.log(actions)

            return {
                ...state,
                name:actions.name,
                photo:actions.photo,
                email:actions.email
            }
            break;
        case actionsType.SIGN_OUT:
            return{
                ...state,
                name:null,
                email:null,
                photo:null
            }
            break
        default:
            return state
            break;
    }

}

export default auth
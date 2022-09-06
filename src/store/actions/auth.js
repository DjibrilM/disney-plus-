import * as actionsType from "./actions.js";


export const login = (response)=>{

    return {
        type:actionsType.ON_LOGIN,
        name:response.name,
        photo:response.photo,
        email:response.email
    }
}

export const signOut = (response)=>{

    return {
        type:actionsType.SIGN_OUT,
    }
}






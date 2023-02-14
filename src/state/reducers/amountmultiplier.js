const reducerx=(state=1,action)=>{
    if(action.type==="multiply"){
        return state*action.payload
    }
    else if(action.type==="divide"){
        return state/action.payload
    }
    else{
        return state
    }
}

export default reducerx
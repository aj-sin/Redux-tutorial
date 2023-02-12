//* Now this here is the reducer which will perform the actual task coming from action creator
//*one thing more there can be many reducer present in an application to perform different kind of action like this is amountreducer which will deal with amount similarly there can be productreducer which will deal with product and so on


//!reducer will take initial state and action and return a task according to that
const reducer=(state=0,action)=>{
    if(action.type==="deposit"){
        return state+action.payload
    }
    else if(action.type==="withdraw"){
        return state-action.payload
    }
    else{
        return state
    }
}

export default reducer
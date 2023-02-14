//*Now this is action creator which will take its commands from the UI and then create action in accordance to that and then dispatch these commands to the reducers which will perform the actual tasks

//!the function here take amount as a state and then return a function which will take function dispatch as an argument and then calls it
export const depositMoney=(amount)=>{
        return (dispatch)=>{
            dispatch({
                type:"deposit",
                payload:amount
            })
        }
}
export const MultiplyMoney=(amount)=>{
        return (dispatch)=>{
            dispatch({
                type:"multiply",
                payload:amount
            })
        }
}
export const DivideMoney=(amount)=>{
        return (dispatch)=>{
            dispatch({
                type:"divide",
                payload:amount
            })
        }
}
export const WithdrawMoney=(amount)=>{
        return (dispatch)=>{
            dispatch({
                type:"withdraw",
                payload:amount
            })
        }
}
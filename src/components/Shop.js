import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch=useDispatch();
  // const action=bindActionCreators(actionCreators,dispatch) or we can write the below instruction
  // const {WithdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)
  const {WithdrawMoney,depositMoney,MultiplyMoney,DivideMoney}=actionCreators
  const state=useSelector(state=>state.amountreducer)
  const statex=useSelector(state=>state.amountmultiplier)
  return (
    <div className='container'>
        <h1>Deposite/Withdraw Money </h1>
           {/* <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button>
             Update Balance
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
           <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{dispatch(WithdrawMoney(100))}}>-</button>
             Update Balance {state}
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{dispatch(depositMoney(100))}}>+</button>
           <hr />
           <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{dispatch(DivideMoney(5))}}>/</button>
             Update Balance {statex}
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{dispatch(MultiplyMoney(5))}}>*</button>
    </div>
  )
}

export default Shop

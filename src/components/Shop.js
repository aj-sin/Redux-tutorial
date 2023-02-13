import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch=useDispatch();
  // const action=bindActionCreators(actionCreators,dispatch) or we can write the below instruction
  const {WithdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container'>
        <h1>Deposite/Withdraw Money </h1>
           {/* <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button>
             Update Balance
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
           <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{WithdrawMoney(100)}}>-</button>
             Update Balance
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop

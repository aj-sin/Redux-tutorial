import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch=useDispatch();
  return (
    <div className='container'>
        <h1>Deposite/Withdraw Money </h1>
           <button className="btn btn-outline-warning mx-2"  type="submit" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button>
             Update Balance
           <button className="btn btn-outline-warning mx-2" type="submit" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop

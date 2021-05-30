import React from 'react'
import './Bill.css'

type BillProps = {wheelPrice:number, wheelName:string, trucksPrice:number, trucksName:string};
export const Bill = ({wheelPrice, wheelName, trucksPrice, trucksName}:BillProps) => {
    return(
    <div className='bill'>
        <h3 className='billh3'>Cuenta</h3>
        <p className='ph3'>Ruedas:{" "+wheelName+" $"+wheelPrice}</p>
        <p className='ph3'>Truck:{" "+trucksName+" $"+trucksPrice}</p>
        <p className='ph3'>Tabla:</p>
        <p className='ph3'>Lija:</p>
        <h3 className='billh3'>Total:</h3>
        <button className='billBtn'>Terminar</button>
    </div>)
} 
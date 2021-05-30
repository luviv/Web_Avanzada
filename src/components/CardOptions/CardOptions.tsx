import React from 'react'
import './CardOptions.css'
type Cardprop = {
    img:string, 
    name:String, 
    price:number, 
    event:any
};

export const CardOptions = ({img, name, price, event}:Cardprop) => {
    return(
    <div className='cardOptions' onClick={event}>
        <img src={img} className='imgOptions'/>
        <p className='pOption'>{name}</p>
        <p className='pOption'>${price}</p>
    </div>)
}

import React from 'react'
import {  Link, Route } from 'react-router-dom'
import './SkateParts.css'
export const SkateParts = () => {
    return(<div>
        <img src="../resource/image3.png" className='backgroundParts'/>
        <Route path='/trucks' render={() => {
            return(<div className='skateParts'>
                <h1 className='tittleParts'>Escoge los trucks</h1>
                <img src="../resource/truck1.png" className='wheelsParts'/>
            </div>)
        }}></Route>
        <Route path='/ruedas' render={() => {
            return(<div className='skateParts'>
                <h1 className='tittleParts'>Escoge las ruedas</h1>
                <img src="../resource/wheels1.png" className='wheelsParts'/>
            </div>)
        }}></Route>
    </div>)
}
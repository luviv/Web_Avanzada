import React from 'react'
import {  Link, Route } from 'react-router-dom'
import './SkateOptions.css'
export const SkateOptions = () => {

    return(
        <div className='skateOptions'>
            <Route path='/trucks' render={() => {
            return(
            <div className='partOptions'>
                <h1 className='tittleOptions'>Nuestros trucks</h1>
            </div>)
        }}></Route>
        <Route path='/ruedas' render={() => {
            return(
            <div className='partOptions'>
                <h1 className='tittleOptions'>Nuestras ruedas</h1>
            </div>)
        }}></Route>
        </div>
    );
}
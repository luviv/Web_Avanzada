import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { SkateParts } from '../../components/SkateParts/SkateParts';
import { SkateOptions } from '../../components/SkateOptions/SkateOptions';
import { Bill } from '../../components/Bill/Bill'
import Rueda1 from "../../images/rueda1.png"
import Rueda2 from "../../images/rueda2.png"
import Rueda3 from "../../images/rueda3.png"
import Rueda4 from "../../images/rueda4.png"
import Rueda5 from "../../images/rueda5.png"
import Truck1 from "../../images/truck11.png"
import Truck2 from "../../images/truck2.png"
import Truck3 from "../../images/truck3.png"
import Truck4 from "../../images/truck4.png"
import Truck5 from "../../images/truck5.png"
import { CardOptions } from '../../components/CardOptions/CardOptions'
import { HashRouter, Link, Route } from 'react-router-dom'
import './App.css';
import { getImgUrl } from '../../utils/URL';

const partOptions = [{ img: getImgUrl("rueda1.png"), name: "Black Core 85A", price: 70000 },
{ img: Rueda2, name: "Simple Co Black", price: 90000 },
{ img: Rueda3, name: "Jesse The Hardest", price: 120000 },
{ img: Rueda4, name: "Animal Co Art", price: 70000 },
{ img: Rueda5, name: "OJ Super Juice", price: 150000 }];

const truckOptions = [{ img: Truck1, name: "Trucks Tracker Black", price: 190000 },
{ img: Truck2, name: "LiteZooed Blue", price: 120000 },
{ img: Truck3, name: "Animal Co Powder", price: 110000 },
{ img: Truck4, name: "Animal Co Raw", price: 110000 },
{ img: Truck5, name: "LiteZooed Cyan", price: 150000 }];

export const App = () => {
    const newSkate = {
        wheelPrice: 0,
        wheelName: "",
        trucksPrice: 0,
        trucksName: ""
    };

    const [skate, setSkate] = useState(newSkate);
    return (<main>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Header></Header>
            <SkateParts></SkateParts>
            <Link to='/ruedas' className='link'>Atras</Link>
            <Link to='/trucks' className='link'>Siguiente</Link>
            <div className='skateAccount'>
                <Bill wheelPrice={skate.wheelPrice} wheelName={skate.wheelName} trucksPrice={skate.trucksPrice} trucksName={skate.trucksName}></Bill>
                <Route path='/ruedas' render={() => {
                    return (<div className='skatePartsChange'>
                        <SkateOptions></SkateOptions>
                        <div className='optionComponent'>
                            {partOptions.map(part => <CardOptions img={part.img} name={part.name} price={part.price} event={() => {
                                console.log("Soy una rueda");
                                setSkate((prev) => {
                                    return { ...prev, wheelPrice: part.price, wheelName:part.name };
                                });
                            }}></CardOptions>)}
                        </div>
                    </div>)
                }}></Route>
                <Route path='/trucks' render={() => {
                    return (<div className='skatePartsChange'>
                        <SkateOptions></SkateOptions>
                        <div className='optionComponent'>
                            {truckOptions.map(part => <CardOptions img={part.img} name={part.name} price={part.price} event={() => {
                                console.log("Soy un truck");
                                setSkate((prev) => {
                                    return { ...prev, trucksPrice: part.price, trucksName:part.name };
                                });
                            }}></CardOptions>)}
                        </div>
                    </div>)
                }}></Route>
            </div>
        </HashRouter>
    </main>);
}
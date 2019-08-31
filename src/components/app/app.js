import React from 'react';

import Header from "../appHeader";
import List from "../itemList";
import Details from "../personeDetails";
import RandomPlanet from '../randomPlanet';


import "./app.css";


const Application = () => {
    return (

    <div>
        <Header />
        <RandomPlanet />
        <List />
        <Details />
   
    </div>   
    
    )
}

export default Application;
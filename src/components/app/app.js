import React, { Component } from 'react';

import Header from "../appHeader";
import List from "../itemList";
import ElemDetails from "../personeDetails";
import RandomPlanet from '../randomPlanet';
import "./app.css";


export default class Application extends Component {


    state = {
        showRandomPlanet: true,  
        selectedPerson: 5    
    }


    onPersonSelect = (id) =>{
        this.setState({
            selectedPerson: id
        });
    }


    render(){

        return (
                <div>
                <Header />
                <RandomPlanet />
                <List onItemSelected={this.onPersonSelect}/>
                <ElemDetails personId={this.state.selectedPerson}/>
                </div>   
                )
        }

}


import React, { Component } from 'react';
import SwApiService from '../../service/swService'
import './randomPlanet.css';
import Spinner from '../spinner';
import ErrorView from '../errorView';


export default class RandomPlanet extends Component {

swService = new SwApiService();

state = {
  planet:{},
  loading: true,
  error: false
};


constructor(){
  super();
  this.showRandomPlanet();
  // setInterval(this.showRandomPlanet, 5000)
}


onPlanedLoad = (planet)=> {
  this.setState({planet, loading:false});
}


whenError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
}


showRandomPlanet = () => {
  // const id = 300000;
const id = Math.floor(Math.random()*20) +  2;
console.log(id);
this.swService.getPlanet(id).then(this.onPlanedLoad).catch(this.whenError);
};







render() {

  const { planet, loading, error} = this.state;
 
  const errMsg = error ? <ErrorView /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !loading  && !error ? <LoadedPlanet planet={planet} /> : null;

  return(
        <div className="random-planet jumbotron rounded">
            {spinner}
            {content}
            {errMsg}
        </div>
  )
}

}


const LoadedPlanet = ( { planet } ) => {

  const {id, name, population, rotationPer, diameter} = planet;

      return (
        <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
        </React.Fragment>
      ) ;

}
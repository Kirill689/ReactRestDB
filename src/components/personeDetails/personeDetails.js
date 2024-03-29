import React, { Component } from 'react';
import './personeDetails.css';
import SwApiService from '../../service/swService';

export default class ElemDetails extends Component {

swService = new SwApiService();

state = {
  person: null
};

componentDidMount(){
  this.updatePerson()
};



updatePerson(){

  const { personId } = this.props;

  if(!personId){
    return;
  }

  this.swService
  .getPerson(personId)
  .then((person) =>{
    this.setState({ person });
  });
}



componentDidUpdate(prevProps){
    if(this.props.personId != prevProps.personId){
      this.updatePerson();
    }
}



render(){

    if(!this.state.person){
      return <span>Select Person From List</span>;
    }
    
    const { id, name, gender, 
            birthYear, eyeColor
                    } = this.state.person;

    return(
    <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
    </div>
   );
}

}
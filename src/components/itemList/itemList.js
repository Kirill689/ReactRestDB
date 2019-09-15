import React, { Component } from 'react';
import './itemList.css';
import SwApiService from '../../service/swService';
import Spinner from '../spinner';


export default class List extends Component {


swService = new SwApiService();


state = {
    personsList: null
}


componentDidMount(){
    this.swService.getAllPeople().then((personsList)=>{this.setState({personsList});
});
}


renderPersons(arr){
    return arr.map(({id, name})=>{
        return (
            <li className="list-group-item" key={id} onClick={()=>this.props.onItemSelected(id)}>
                {name}
            </li>
        )
    })
}


render(){

    const { personsList } = this.state;

    if (!personsList){
        return <Spinner />
    }

    const persons = this.renderPersons(personsList);

    return(
    <ul className="item-list list-group">
        {persons}
    </ul>
    );
}

}

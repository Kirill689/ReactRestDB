import React, { Component } from 'react';
import './itemList.css';


export default class List extends Component {

render(){
    return(
    <ul className="item-list list-group">
        <li className="list-group-item">One</li>
        <li className="list-group-item">Two</li>
        <li className="list-group-item">Three</li>
    </ul>
    );
}

}

import React from 'react';
import './appHeader.css';


const Header = () => {
    return (
        <div className="appHeader d-flex">

            <h3> <a href="#">Star Wars DB</a> </h3>

            <ul className="d-flex">
                <li><a href="#">People</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starhsips</a></li>
            </ul>
            
        </div>
    );
}

export default Header;
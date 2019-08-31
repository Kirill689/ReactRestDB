import React from 'react';
import './errorView.css';
import icon from './download.png';


const ErrorView = () => {

return (

    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        Something wrong
      </span>
    </div>

)

}

export default ErrorView;
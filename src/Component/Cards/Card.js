import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Card.css';
const Card = (props) => {
  // console.log(props);
  const {name, image, creator, role, age,country, salary} = props.programmer;
  // console.log(props.addToProgrammer);
  const element = <FontAwesomeIcon icon={faShoppingCart}/>
    return (
      <div className="card-group"> 
        <div className="card">
          <div className="single-img">
            <img className="card-img" src={image} alt={name}/>
            </div>    
            <div className='card-body'>
              <h5 className="card-title">Name: {name}</h5>
              <p className="card-text">Role: {role} </p>
              <p className="card-text">Creator: {creator} </p>
              <p className="card-text">Age: {age} </p>
              <p className="card-text">Country: {country}</p>
              <p className ="card-text"> Salary:${salary}</p>
            </div>
          <button onClick={() => props.addToProgrammer(props.programmer)} type="button" className="btn btn-outline-primary add-btn mx-auto">{ element}  Add to cart</button>
       </div>
       </div>
    );
};

export default Card;
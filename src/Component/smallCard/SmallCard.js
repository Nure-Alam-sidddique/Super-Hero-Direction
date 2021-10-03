import React from 'react';
import './SmallCard.css';
const SmallCard = (props) => {
    // console.log(props.cartProgrammer);
    // const [name,image]=props.cartProgrammer;
    return (
      <div className="sidenav">
        <div className="small-card d-flex">
          <div className="row g-0">
            <div className="small-card-img col-md-3">
              <img
                className="card-small-img"
                src={props.cartProgrammer.image}
                alt=""
              />
            </div>
            <div className="card-body col-md-9">
              <h5 className="card-text programmer-name">
                {props.cartProgrammer.name}
                <span className="danger text-center text-white ">X</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SmallCard;
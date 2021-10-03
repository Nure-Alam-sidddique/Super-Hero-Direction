import { faCheckCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import SmallCard from '../smallCard/SmallCard.js';

const ProgrammerAdded = (props) => {
    // console.log(props.programmer);
    const element = <FontAwesomeIcon icon={faUser} />
    const confirm = <FontAwesomeIcon icon = {faCheckCircle}/>
    const total = props.programmer.reduce((previous,current)=> previous + current.salary,0)
    return (
        <div className="mt-2 ">
            <h4 className="text-center mb-3">{ element} Programmer added : <span className="bg-dark  text-white px-2 rounded-circle "> {props.programmer.length}</span></h4>
            <h4 className="text-center mb-4">Total Cost: $ <span className="bg-dark text-white px-2 rounded">{total}</span></h4>
            {props.programmer.map(programmer => <SmallCard key={programmer.id} cartProgrammer={programmer}></SmallCard>)}
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary">{confirm} Confirm</button>
                </div>
        </div>
    );
};

export default ProgrammerAdded;
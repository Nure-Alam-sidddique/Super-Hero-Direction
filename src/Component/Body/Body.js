import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import ProgrammerAdded from '../ProgrammerAdded/ProgrammerAdded';
import './Body.css';

const Body = () => {
    const [programmers, setProgrammers]= useState([]);
    const [cartProgrammer, setCartProgrammer]=useState([]);
    useEffect(()=>{
        fetch('./Programmers.json')
        .then(res=>res.json())
        .then(data=>setProgrammers(data));
    },[]);
    const addToProgrammerHandler =(programmer)=>{
        const newProgrammer = [...cartProgrammer, programmer];
        setCartProgrammer(newProgrammer);
    }
    // console.log(programmers);
    return (
        <div className="body">
            <div className="cards">
                {programmers.map(programmer=><Card key={programmer.id} addToProgrammer={addToProgrammerHandler} programmer={programmer}></Card>)}
            </div>
            <div className="programmer-added">
                <ProgrammerAdded programmer={cartProgrammer}></ProgrammerAdded>
            </div>
        </div>
    );
};

export default Body;
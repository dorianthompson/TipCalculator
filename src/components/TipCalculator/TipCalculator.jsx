import React, { useState } from 'react';
import './TipCalculator.css';

export default function TipCalculator() {
    const [bill, setBill] = useState(50);
    const [tipPercentage, setTipPercentage] = useState(18);
    const [people, setPeople] = useState(1);

    const tip = (bill * tipPercentage) / 100;
    const tipPerPerson = tip / people;

    return (
        <>
            <label htmlFor='bill'>Bill</label>
            <input 
                id='bill'
                type="number"
                min="0"
                value={bill}
                onChange= {event => setBill(parseInt(event.target.value))} 
            />
            
            <label htmlFor='tip'>Tip Percantage</label>
            <input 
                id='tip'
                type="number"
                min="0"
                value={tipPercentage}
                onChange= {event => setTipPercentage(parseInt(event.target.value))} 
            />

            <label htmlFor='people'>Number of People</label>
            <input 
                id='people'
                type="number"
                min="1"
                value={people}
                onChange= {event => setPeople(parseInt(event.target.value))} 
            />

            <p>Total Tip: {isNaN(tip) ? '-' : `$${tip.toFixed(2)}`}</p>
            <p>Tip Per Person: {isNaN(tipPerPerson) ? '-' : `$${tipPerPerson.toFixed(2)}`}</p>
        </>
    );
}
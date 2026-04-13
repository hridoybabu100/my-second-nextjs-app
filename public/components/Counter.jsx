'use client'
import { useState } from "react";


const Counter = () => {

    const [counter, setCounter] = useState(0);

    console.log('Counter is a server side client', counter);
    
    return (
        <div className="py-4">
            <h3 className='text-4xl font-bold'>Counter : {counter}</h3>
            <button
            onClick={() => setCounter(counter + 1)}
            >Increment</button>
        </div>
    );
};

export default Counter;
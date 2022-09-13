import React, {useState} from 'react';
import './Counter.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>clicked:{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

export default Counter;
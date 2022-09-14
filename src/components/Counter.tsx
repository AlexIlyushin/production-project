import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={classes.btn}>
            <h1>clicked:{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

export default Counter;
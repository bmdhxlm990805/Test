import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './Transition.css';

const duration = 1000;

export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} timeout={duration}>
                {state => {
                    console.log(state, inProp,)
                    return (<h1 className={state}>这里是测试数据</h1>)
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Toggle
            </button>
        </div>
    );
}

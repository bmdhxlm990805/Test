import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './SwitchTransition.css';

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <SwitchTransition>
            <CSSTransition in={inProp} timeout={1000} classNames="demo" >
                <div>
                    {"I'll receive my-node-* classes"}
                    <button type="button" onClick={() => setInProp(!inProp)}>
                        Click to Enter
                    </button>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}

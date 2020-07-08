import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './TranTest.css';
// export default function TranTest() {
//     function Over() {
//         console.log('MouseOver')
//     }
//     function Out() {
//         console.log('MouseOut')
//     }
//     function Click() {
//         console.log('Click')
//     }
//     function Wheel(e) {
//         console.log('Wheel')
//         if (e.deltaY < 0) {
//             console.log('上', e.deltaY, e)
//         } else {
//             console.log('下', e.deltaY, e)
//         }
//     }
//     return (
//         <>
//             <div className='over'
//                 onMouseOver={Over}
//                 onMouseOut={Out}
//                 onClick={Click}
//                 onWheel={(e) => Wheel(e)}>
//                 Download The App
//             </div>
//         </>
//     )
// }
export default function TranTest() {
    function Enter() {
        console.log('MouseEnter')
        setInProp(true)
    }
    function Leave() {
        console.log('MouseLeave')
        setInProp(false)

    }
    const [inProp, setInProp] = useState(false);
    return (
        <>
            <Transition in={inProp} timeout={1000} >
                {state => {
                    return (
                        <div className={`over ${state}`}
                            onMouseEnter={Enter}
                            onMouseLeave={Leave} >
                            Download The App
                        </div>
                    )
                }}
            </Transition>

        </>
    )
}
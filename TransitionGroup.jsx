import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TransitionGroup.css';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [datas, setDatas] = useState([
        { id: uuidv4(), name: '数据1' },
        { id: uuidv4(), name: '数据2' },
        { id: uuidv4(), name: '数据3' },
        { id: uuidv4(), name: '数据4' },
    ]);

    return (
        <div>
            <TransitionGroup>
                {datas.map(t => (
                    <CSSTransition timeout={1000} key={t.id}>
                        <div>{t.name} <button onClick={() => {
                            var newDatas = datas.filter(it => it.id !== t.id);
                            setDatas(newDatas);
                        }}>删除</button> </div>

                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={() => {
                var newName = window.prompt('请添加一个任务···');
                setDatas([...datas, { id: uuidv4(), name: newName }])
            }}>请添加一个任务</button>
        </div>
    );
}

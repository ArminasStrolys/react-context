import React from 'react';
import { useGlobalContext } from '../../context/TasksContext';

const Task = (props) => {
    return (
        <div>
            {props.title}:{props.desc} <button>Remove</button>

        </div>
    );
}

export default Task;

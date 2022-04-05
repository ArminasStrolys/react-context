import React from 'react';

const Task = (props) => {
    return (
        <div>
            {props.title}:{props.desc}
        </div>
    );
}

export default Task;

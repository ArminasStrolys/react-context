import React from 'react';
import { useGlobalContext } from '../../context/TasksContext';
import AddTask from '../addTask/AddTask';
import Task from '../task/Task';

const Tasks = () => {
    const {tasks} = useGlobalContext()
    console.log(tasks)
    return (
        <div>
            TTETETE
            <button>Add</button>
            <AddTask />
            {tasks.length && tasks.map((task, i) => <Task
                key={i}
                id={task.id}
                title={task.title}
                desc={task.desc}
            />)}
        </div>
    );
}

export default Tasks;

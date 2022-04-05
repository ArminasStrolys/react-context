import React, { useState } from 'react';
import { useGlobalContext } from '../../context/TasksContext';
const AddTask = () => {
    const {addTask} = useGlobalContext()
    const [newTask, setNewTask] = useState({
        'title':'',
        'desc':''
    })

const handleChange = (e) => {
    setNewTask({
        ...newTask,
        [e.target.name]:e.target.value
    })
}

const submitHandler = (e) => {
    e.preventDefault()
    addTask(newTask)
}

console.log(newTask)

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='HELLO THERE' value={newTask.title} onChange={handleChange} name='title' />
                <input type="text" placeholder='HELLO' value={newTask.desc} onChange={handleChange} name='desc' />
                <button type='submit'>Set task</button>
            </form>
        </div>
    );
}

export default AddTask;

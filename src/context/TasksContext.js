import React, { useState, useContext, useReducer } from 'react';
import { newTask, deleteTask } from '../components/actions/TodoActions';
import TodoReducer from '../components/reducers/TodoReducers';

const AppContext = React.createContext();

const initialState = {
    tasks:[
        {
            id:1,
            title: 'Learn',
            desc: 'Harder, better, stronger'
        },
        {
            id:2,
            title: 'BEAR',
            desc: 'Harder, better, stronger'
        },
        {
            id:3,
            title: 'Cool as a cucumber',
            desc: 'Harder, better, stronger'
        },
        
    ]
}


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

const [isOpen, setIsOpen] = useState(false)
const addTask = (data) => {
dispatch(newTask(data))
}

const openForm = () => {
    setIsOpen(true)
}

    return(
        <AppContext.Provider value={{
            isOpen,
            openForm
        }}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {
title: 'Max',
desc: 'Power'
    }
])

const [isOpen, setIsOpen] = useState(false)

    const addTask = (data) => {
        setTasks((val)=>{
            return [data, ...val]
        })
    }

const openForm = () => {
    setIsOpen(true)
}

    return(
        <AppContext.Provider value={{
            tasks,
            addTask,
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
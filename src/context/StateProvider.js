// Required Dependencies
import React, { createContext, useContext, useReducer } from 'react'

// Preparing the Data Layer
export const StateContext = createContext()

// HOC
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Hook, which allows us to pull info from data layer
export const useStateValue = () => useContext(StateContext)
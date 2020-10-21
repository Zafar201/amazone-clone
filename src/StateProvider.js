import React, { createContext, useContext, useReducer} from 'react'

// prepares Data layer
export const StateContext = createContext()

// wrap our app and provide Data layer
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
// pull informatiom from data layer
export const useStateValue=()=>useContext(StateContext)
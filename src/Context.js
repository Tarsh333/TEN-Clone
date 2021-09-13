import React, { useContext, useReducer } from 'react'
import Reducer from './Reducer'
import Data from './Data'
const AppContext=React.createContext()
const initialState={
    Data,
    subtotal:0,
    sidebarOpen:false
}
const Context = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const addToCart=(payload)=>{
        dispatch({type:'ADD_TO_CART',payload})
    }
    const removeFromCart=(payload)=>{
        dispatch({type:'REMOVE_FROM_CART',payload})
    }
    const incCart=(payload)=>{
        dispatch({type:'INC_CART',payload})
    }
    const decCart=(payload)=>{
        dispatch({type:'DEC_CART',payload})
    }
    const setSidebarOpen=(payload)=>{
        dispatch({type:'SET_SIDEBAR_OPEN',payload})
    }
   
    return (
        <AppContext.Provider value={{
            ...state,
            addToCart,
            removeFromCart,
            incCart,
            decCart,
            setSidebarOpen
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
  }  
export {Context,useGlobalContext}

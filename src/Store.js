import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

const initialState = {
    session_token: null,
    error: null
}

const Store = ({childComponent}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {childComponent}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
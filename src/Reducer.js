const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                session_token: action.session_token,
                error: null
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                session_token: null,
                error: null,
                message: action.message
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error,
                message: null
            };
        default: 
            return state;
    }
}

export default Reducer;
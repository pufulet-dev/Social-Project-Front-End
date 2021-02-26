const initialState = {
    counter: 6,
    toggleLogInRegister: "Log In",
    path: "/",
}

const reducer = (state = initialState, action) => {
    if (action.type === "TOGGLE") {
        if (state.toggleLogInRegister === "Log In") {
            return {
                toggleLogInRegister: "Register",
                path: "/search-incident",
            }
        } else {
            return {
                toggleLogInRegister: "Log In",
                path: "/",
            }
        }
    }
    return state;
}

export default reducer;
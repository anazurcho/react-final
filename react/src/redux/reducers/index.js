const initialState = {
    isLoggedIn: false,
    token: "",
    email:"",
    theme:"darkly"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            localStorage.setItem( "token:", action.payload.token );
            return {
                isLoggedIn: true,
                email: action.payload.email,
                token: action.payload.token,
            };
        case 'CHANGE_THEME':
            return{
                ...state,
                theme: action.payload
            };
        case 'USER_LOGGED_OUT':
            localStorage.setItem("token:", false);
            return {
                isLoggedIn: false,
                token: "",
                email:""
            };
        default:
            return state;
    }
}

export default reducer;

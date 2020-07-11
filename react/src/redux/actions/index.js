const userAuthenticated = ( email, token ) => {
    // localStorage.setItem( "token:", token );
    // console.log(token)
    return {
        type: 'USER_AUTHENTICATED',
        payload: {
            email: email,
            token: token
        }
    };
}
const userLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT',
        token:false
    };
}
const ChangeTheme = ( theme ) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme
    };
}

export {
    userAuthenticated,
    userLoggedOut,
    ChangeTheme,
    USER_AUTHENTICATED,
    CHANGE_THEME,
    USER_LOGGED_OUT

};
const USER_AUTHENTICATED = "USER_AUTHENTICATED";
const CHANGE_THEME = "CHANGE_THEME";
const USER_LOGGED_OUT = "USER_LOGGED_OUT";
import React from "react";
import Home from "../Home";
import { connect } from "react-redux";

const Body = ({ isLoggedIn, token }) => {

    return (
        <div>
            <Home isLoggedIn={isLoggedIn} token={token}/> 
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        token: state.token
    };
}

export default connect(mapStateToProps)(Body);
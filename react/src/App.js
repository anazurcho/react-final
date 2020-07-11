import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import { connect } from "react-redux";
import {Helmet} from "react-helmet";


const App = ({theme}) => {
    var realTheme = ("");
  
    if (theme==='minty'){
        realTheme=(
            <Helmet>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Helmet>
        )
    }else{
         realTheme=(
            <Helmet>
                <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css" />
            </Helmet>
        )
    }
    return (
            <>
            {realTheme}
                <Navbar/>
                <Switch>
                    <Route path="/" component={Body} exact/>
                    <Route path="/login" component={Login}/>
                </Switch>
                <div>
                </div>
            </>
    );
}
const mapStateToProps = ( state ) => {
    return {
        theme: state.theme,
    };
}

export default connect(mapStateToProps)(App);


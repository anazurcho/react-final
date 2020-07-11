import React, {useContext, useState} from 'react';
import classes from '../../style/index.css';
import StrapiServiceContext from "../../services/strapi-service-context";
import { connect } from "react-redux";
import {userAuthenticated} from "../../redux/actions";
import {useHistory} from "react-router-dom";


const Login = ({ userAuthenticated }) => {

    const strapiService = useContext(StrapiServiceContext);

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    let history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        strapiService.loginUser( email, token )
            .then(response => {
                console.log("chaviweri");
                console.log( token );
                userAuthenticated(email,token);
                console.log(response);
                history.push('/');
            })
            .catch(error =>{
                console.log(error);
                alert("Try Again");
            });
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setToken( e.target.value );
    }

    return (
        <>
            <form className={classes['login-form']} onSubmit={onSubmit}>
                <legend>Login</legend>
                <div className="form-group">
                    <label htmlFor="loginInputEmail">Email address</label>
                    <input type="email" className="form-control" id="loginInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" onChange={onEmailChange} value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="loginInputPassword">Password</label>
                    <input type="password" className="form-control" id="loginInputPassword"
                        placeholder="Password" onChange={onPasswordChange} value={token}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    );
}

const mapDispatchToProps = {
    userAuthenticated,
}

export default connect(undefined, mapDispatchToProps)(Login);

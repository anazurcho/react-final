import React from "react";
import reducer from "../redux/reducers"
import {USER_AUTHENTICATED,USER_LOGGED_OUT, CHANGE_THEME, ChangeTheme} from "../redux/actions";
import { describe, expect, it } from "@jest/globals";

describe( "InitialState reducer", () => {
    it( "should return the initial state", () => {
        expect(reducer( undefined, {} ) ).toEqual( {
            isLoggedIn: false,
            token: "",
            email: "",
            theme: "darkly"
        } );
    } );
    it( "should return is logined in true", () => {
        expect(
            reducer( [], {
                type: USER_AUTHENTICATED,
                payload: {isLoggedIn: true},
            } )
        ).toEqual( {
            isLoggedIn: true,
        } );
    } );
    it( "should return is logined out true", () => {
        expect(
            reducer( [], {
                type: USER_LOGGED_OUT,
                payload: {
                    isLoggedIn: false
                },
            } )
        ).toEqual( {
            isLoggedIn: false,
            token: "",
            loggedInUser: "",
            loggedInUserId: "",
        } );
    } );
    it( "should return is Theme", () => {
        const payload = {
            theme: "journal"
        }
        const expectedAction = {
            type: CHANGE_THEME,
            payload,
        };
        expect(ChangeTheme(payload)).toEqual(expectedAction);
    } );
} );

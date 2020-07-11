import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import StrapiServiceContext from "./services/strapi-service-context";
import './style/index.css';
import StrapiService from "./services/strapiService";



const strapiService = new StrapiService();
import store  from "./redux/store/store";


const app = (
    <Provider store={store}>
        <StrapiServiceContext.Provider value={strapiService}>
            <Router>
                <App />
            </Router>
        </StrapiServiceContext.Provider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));



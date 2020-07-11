import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import StrapiServiceContext from "./services/strapi-service-context";
import './style/index.css';
import StrapiService from "./services/strapiService";

import { ApolloProvider } from "react-apollo";
import client from './apolo-service/utils/apolloClient'


const strapiService = new StrapiService();
import store  from "./redux/store/store";


const app = (
    <Provider store={store}>
        <StrapiServiceContext.Provider value={strapiService}>
            <Router>
                 <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </Router>
        </StrapiServiceContext.Provider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));



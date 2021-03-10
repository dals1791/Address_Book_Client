import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/index.css';
import App from './App';
import {  ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import {getToken} from './helpers/AuthToken'

const httpLink = createHttpLink({
  uri: 'https://address-book-sd.herokuapp.com/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()

})

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
    <ApolloProvider client={client}>
      <Route component={App} path="/" />
    </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

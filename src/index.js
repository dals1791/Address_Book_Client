import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/index.css';
import App from './App';
import {  ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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

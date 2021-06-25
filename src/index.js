import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { client } from "./utils/client";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



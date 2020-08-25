import React from 'react';
import client from './config/index'
import { ApolloProvider } from '@apollo/client';
import './App.css';

function App() {
  console.log(client)
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;

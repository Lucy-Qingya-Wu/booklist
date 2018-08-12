import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import {ApolloProvider} from 'react-apollo';
// apollo client setup

// let’s import ApolloClient from apollo-boost and add the endpoint for our 
// GraphQL server to the uri property of the client config object.
const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"
});



class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Lucy's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
    );
  }
}

export default App;

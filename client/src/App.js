import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import Addbook from './components/AddBook';



// apollo client setup
const client = new ApolloClient({
    uri: 'https://graphql-started.herokuapp.com/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Hathodi Reading List</h1>
                <h5>P.S: Owner of the Application has no liability on the Book's Added, as anybody can create a book without Authenticating himself/herself.</h5>
                <BookList />
                <Addbook/>
            </div>
        </ApolloProvider>
    );
  }
}

export default App;

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {createHttpLink} from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import Home from './Home';

const client = new ApolloClient({
  link: createHttpLink({uri: 'http://localhost:4000/graphql'}),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;

import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {createHttpLink} from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import Home from './Home';
import Form from './Form';

const client = new ApolloClient({
  link: createHttpLink({uri: 'http://localhost:4000'}),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <View>
          <Form />
          <Home />
        </View>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;

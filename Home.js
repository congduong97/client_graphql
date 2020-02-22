import React from 'react';
import {Dimensions, Text, FlatList} from 'react-native';

import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const {height, width} = Dimensions.get('window');

const GET_USERS = gql`
  {
    users {
      id
      name
      age
    }
  }
`;

const Home = () => {
  const {loading, error, data} = useQuery(GET_USERS);
  if (loading) {
    console.log('loading', loading);
    return <Text>'Loading...'</Text>;
  }

  if (error) return <Text>Error {error.message} </Text>;

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        width,
      }}
      data={data.users}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Text
          style={{
            width: width - 32,
            borderColor: 'blue',
            color: 'blue',
            borderWidth: 1,
            padding: 16,
            textAlign: 'center',
            marginTop: 16,
          }}>
          {item.name}
        </Text>
      )}
    />
  );
};

export default Home;

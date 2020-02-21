import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      type
    }
  }
`;

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser, {data}] = useMutation(CREATE_USER);
  console.log('dataMu', data);

  return (
    <View style={{height: 300}}>
      <TextInput
        onChangeText={text => {
          setUserName(text);
        }}
        style={{borderColor: 'grey', borderWidth: 1, height: 48, margin: 16}}
      />
      <TextInput
        onChangeText={text => {
          setEmail(text);
        }}
        style={{borderColor: 'grey', borderWidth: 1, height: 48, margin: 16}}
      />
      <TouchableOpacity
        onPress={() => createUser({variables: {name: userName, email}})}
        style={{backgroundColor: 'blue', margin: 16, padding: 16}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

const CREATE_USER = gql`
  mutation createUser($data: CreateUserInput) {
    createUser(data: $data) {
      id
      name
      email
    }
  }
`;

const Form = () => {
  const [id, setID] = useState('0');
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [createUser, {data}] = useMutation(CREATE_USER);

  return (
    <View style={{height: 400}}>
      <TextInput
        onChangeText={text => {
          setID(text);
        }}
        style={{borderColor: 'grey', borderWidth: 1, height: 48, margin: 16}}
      />
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
        onPress={() =>
          createUser({
            variables: {data: {id, name, email}},
          }).then(res => setUser(res.data.createUser))
        }
        style={{backgroundColor: 'blue', margin: 16, padding: 16}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>
      {user && <Text>{user.name}</Text>}
    </View>
  );
};

export default Form;

/*
// Path: CompanionPlusApp/screens/auth/RegisterAsRelationScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterAsRelationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (name === '' || email === '' || password === ''||age==' ') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    // Here, you can add registration logic (API call, validation, etc.)
    Alert.alert('Registration Successful', 'You have successfully registered as a Relation.');

    // Navigate to the Relation login screen (or home screen)
    navigation.navigate("LoginAsRelation" as never); // Navigate to LoginAsRelationScreen or HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register as Relation</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

<TextInput
        style={styles.input}
        placeholder="Age"
        secureTextEntry
        value={age}
        onChangeText={setAge}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate("LoginAsRelation" as never)}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default RegisterAsRelationScreen;
*/
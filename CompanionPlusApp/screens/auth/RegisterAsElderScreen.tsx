// Path: CompanionPlusApp/screens/auth/RegisterAsElderScreen.tsx
/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterAsElderScreen = () => {
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
    Alert.alert('Registration Successful', 'You have successfully registered as an Elder.');

    // Navigate to the Elder login screen (or home screen)
    navigation.navigate("LoginAsElder" as never); // Navigate to LoginAsElderScreen or HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

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
          <TouchableOpacity onPress={() => navigation.navigate("LoginAsElder" as never)}>
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

export default RegisterAsElderScreen;
*/
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterAsElderScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (name === '' || email === '' || password === '' || age === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Create the payload
    const payload = {
      name,
      email,
      password,
      age,
      role: 'elder', // You can adjust this based on your needs
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/register', payload); // Change to your backend URL
      console.log('Registration Successful:', response.data);
      
      // Show success message
      Alert.alert('Registration Successful', 'You have successfully registered as an Elder.');

      // Navigate to the Elder login screen (or home screen)
      navigation.navigate("LoginAsElder" as never); // Navigate to LoginAsElderScreen or HomeScreen
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // If error is an AxiosError, handle it accordingly
        console.error('Error registering:', error.response?.data || error.message);
        Alert.alert('Error', error.response?.data?.message || 'Something went wrong. Please try again.');
      } else {
        // Handle any other errors
        console.error('Unexpected error:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

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
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate("LoginAsElder" as never)}>
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

export default RegisterAsElderScreen;

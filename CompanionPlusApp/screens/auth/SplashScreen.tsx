// Path: CompanionPlusApp/screens/auth/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timer for 3 seconds, then navigate to the Login screen
    setTimeout(() => {
      navigation.navigate("LoginAsElder" as never); // Replace with your desired screen
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Display the logo or a welcome message */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Companion+</Text>
      {/* Show a loading spinner */}
      <ActivityIndicator size="large" color="#4CAF50" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  spinner: {
    marginTop: 20,
  },
});

export default SplashScreen;

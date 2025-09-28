// Path: CompanionPlusApp/screens/common/NotFoundScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>404 - Page Not Found</Text>
      <Text style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate("Home" as never)} // Navigate to Home Screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#EF4444',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NotFoundScreen;

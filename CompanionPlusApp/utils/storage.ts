// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token); // Save the token
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token'); // Get the saved token
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token'); // Remove the token on logout
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

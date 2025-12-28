import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = async () => {
  await AsyncStorage.multiRemove(['token', 'role']);
  await AsyncStorage.setItem('hasLoggedOut', 'true');
};

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../utils/storage';

const AuthLoadingScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await getToken();

    if (token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'ElderHome' }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginAsElder' }],
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;

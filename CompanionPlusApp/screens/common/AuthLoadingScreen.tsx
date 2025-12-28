

// import React, { useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getToken } from '../../utils/storage';

// const AuthLoadingScreen = () => {
//   const navigation = useNavigation<any>();

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     const token = await getToken();
//     const role = await AsyncStorage.getItem('role');

//     // ❌ No token → login
//     if (!token || !role) {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'RoleSelection' }],
//       });
//       return;
//     }

//     // ✅ Elder
//     if (role === 'elder') {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'ElderHome' }],
//       });
//       return;
//     }

//     // ✅ Caregiver
//     if (role === 'caregiver') {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'CaregiverHome' }],
//       });
//       return;
//     }

//     // fallback
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'RoleSelection' }],
//     });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator size="large" color="#4CAF50" />
//     </View>
//   );
// };

// export default AuthLoadingScreen;



// import React, { useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AuthLoadingScreen = () => {
//   const navigation = useNavigation<any>();

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     const token = await AsyncStorage.getItem('token');
//     const role = await AsyncStorage.getItem('role');

//     console.log('AUTH CHECK:', token, role);

//     if (token && role === 'elder') {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'ElderHome' }],
//       });
//     } else if (token && role === 'caregiver') {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'CaregiverHome' }],
//       });
//     } else {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'LoginAsElder' }],
//       });
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// };

// export default AuthLoadingScreen;





import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AuthLoadingScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      const role = await AsyncStorage.getItem('role');
      const hasLoggedOut = await AsyncStorage.getItem('hasLoggedOut');

      // 🔥 USER LOGGED OUT → ROLE SELECTION
      if (!token && hasLoggedOut === 'true') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'RoleSelection' }],
        });
        return;
      }

      // 🔥 LOGGED IN FLOW
      if (token && role === 'elder') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ElderHome' }],
        });
        return;
      }

      if (token && role === 'caregiver') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'CaregiverHome' }],
        });
        return;
      }

      // 🔥 FIRST TIME USER
      navigation.reset({
        index: 0,
        routes: [{ name: 'RoleSelection' }],
      });
    };

    checkAuth();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;

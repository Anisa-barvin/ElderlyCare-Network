// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import api from "../../utils/api";

// const VerifyOtpScreen = () => {
//   const navigation = useNavigation<any>();
//   const route = useRoute<any>();
//   const { email } = route.params;

//   const [otp, setOtp] = useState("");

//   const verifyOtp = async () => {
//     if (!otp) {
//       Alert.alert("Error", "Enter OTP");
//       return;
//     }

//     try {
//       await api.post("/auth/verify-otp", { email, otp });
//       Alert.alert("Success", "Email verified successfully");
//       navigation.replace("LoginAsElder"); // OR CaregiverLogin
//     } catch (error: any) {
//       Alert.alert("Failed", error.response?.data?.message || "Invalid OTP");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify Email</Text>
//       <Text style={styles.subtitle}>
//         Enter the OTP sent to {email}
//       </Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         keyboardType="number-pad"
//         value={otp}
//         onChangeText={setOtp}
//       />

//       <TouchableOpacity style={styles.button} onPress={verifyOtp}>
//         <Text style={styles.buttonText}>Verify OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default VerifyOtpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "#F3F4F6",
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   subtitle: {
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#6B7280",
//   },
//   input: {
//     backgroundColor: "#fff",
//     padding: 14,
//     borderRadius: 10,
//     borderWidth: 1,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#2563EB",
//     padding: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const VerifyOtpScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { email,role } = route.params;

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  

// const handleVerifyOtp = async () => {
//   if (otp.length !== 6) {
//     Alert.alert('Error', 'Enter a valid 6-digit OTP');
//     return;
//   }

//   try {
//     setLoading(true);

//     const res = await api.post('/auth/verify-otp', {
//       email,
//       otp,
//     });

//     console.log('OTP VERIFY RESPONSE:', res.data);

//     await AsyncStorage.multiSet([
//       ['token', res.data.token],
//       ['role', res.data.user.role],
//       ['hasLoggedOut', 'false'],
//     ]);

//     // 🔥 ROLE-BASED NAVIGATION
//     const destination =
//       res.data.user.role === 'caregiver'
//         ? 'CaregiverHome'
//         : 'ElderHome';

//     navigation.reset({
//       index: 0,
//       routes: [{ name: destination }],
//     });

//   } catch (err: any) {
//     Alert.alert(
//       'Failed',
//       err.response?.data?.message || 'OTP verification failed'
//     );
//   } finally {
//     setLoading(false);
//   }
// };
const handleVerifyOtp = async () => {
  if (otp.length !== 6) {
    Alert.alert('Error', 'Enter a valid 6-digit OTP');
    return;
  }

  try {
    setLoading(true);

    // ✅ SELECT API BASED ON ROLE
    const endpoint =
      role === "caregiver"
        ? "/caregiver/verify-otp"
        : "/auth/verify-otp";

    // ✅ SELECT HOME SCREEN
    const home =
      role === "caregiver"
        ? "CaregiverHome"
        : "ElderHome";

    const res = await api.post(endpoint, { email, otp });

    // ✅ SAVE AUTH DATA
    await AsyncStorage.multiSet([
      ["token", res.data.token],
      ["role", role],
    ]);

    Alert.alert("Success", "Email verified successfully");

    // ✅ HARD RESET TO HOME
    navigation.reset({
      index: 0,
      routes: [{ name: home }],
    });

  } catch (err: any) {
    Alert.alert(
      'Failed',
      err.response?.data?.message || 'OTP verification failed'
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>OTP sent to {email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 6-digit OTP"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>
          {loading ? 'Verifying...' : 'Verify'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOtpScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#b1c9e1ff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#374151',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#22C55E',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});

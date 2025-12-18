
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const RegisterAsElderScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const navigation = useNavigation();

//   const handleRegister = async () => {
//     if (name === '' || email === '' || password === '' || age === '') {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     // Create the payload
//     const payload = {
//       name,
//       email,
//       password,
//       age,
//       role: 'elder', // You can adjust this based on your needs
//     };

//     try {
//       // Send a POST request to the backend
//       const response = await axios.post('http://localhost:5000/api/auth/register', payload); // Change to your backend URL
//       console.log('Registration Successful:', response.data);
      
//       // Show success message
//       Alert.alert('Registration Successful', 'You have successfully registered as an Elder.');

//       // Navigate to the Elder login screen (or home screen)
//       navigation.navigate("LoginAsElder" as never); // Navigate to LoginAsElderScreen or HomeScreen
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         // If error is an AxiosError, handle it accordingly
//         console.error('Error registering:', error.response?.data || error.message);
//         Alert.alert('Error', error.response?.data?.message || 'Something went wrong. Please try again.');
//       } else {
//         // Handle any other errors
//         console.error('Unexpected error:', error);
//         Alert.alert('Error', 'Something went wrong. Please try again.');
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         onChangeText={setAge}
//         keyboardType="numeric"
//       />

//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           Already have an account?{' '}
//           <TouchableOpacity onPress={() => navigation.navigate("LoginAsElder" as never)}>
//             <Text style={styles.link}>Login</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 12,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   link: {
//     color: '#0066cc',
//     fontWeight: 'bold',
//   },
// });

// export default RegisterAsElderScreen;












//  Path: CompanionPlusApp/screens/auth/RegisterAsElderScreen.tsx
// import React, { useState, useMemo } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import api from '../../utils/api'; // expects utils/api.ts (fallback to axios if not present)
// import axios from 'axios';

// const RegisterAsElderScreen = () => {
//   const navigation = useNavigation();

//   // form state
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');

//   // ui state
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // simple validators
//   const isEmailValid = useMemo(() => {
//     // very small email regex for UX
//     return /\S+@\S+\.\S+/.test(email);
//   }, [email]);

//   const isPasswordValid = useMemo(() => password.length >= 6, [password]);
//   const isAgeValid = useMemo(() => {
//     const n = Number(age);
//     return Number.isInteger(n) && n > 0 && n < 130;
//   }, [age]);

//   const isFormValid = isEmailValid && isPasswordValid && name.trim() !== '' && isAgeValid;

//   const handleRegister = async () => {
//     if (!isFormValid) {
//       Alert.alert('Invalid input', 'Please check your input fields and try again.');
//       return;
//     }

//     setLoading(true);

//     const payload = {
//       name: name.trim(),
//       email: email.trim(),
//       password,
//       age: Number(age),
//       role: 'elder',
//     };

//     try {
//       // Use your API instance if available; otherwise fall back to axios
//       const client = api ?? axios;
//       const response = await client.post('/auth/register', payload); // api.baseURL should be /api
//       console.log('Registration Successful:', response.data);

//       Alert.alert('Registration Successful', 'You have successfully registered as an Elder.', [
//         {
//           text: 'Go to Login',
//           onPress: () => navigation.navigate('LoginAsElder' as never),
//         },
//       ]);
//     } catch (err: any) {
//       console.error('Registration error:', err?.response?.data ?? err.message ?? err);
//       const message = err?.response?.data?.message || 'Registration failed. Try again later.';
//       Alert.alert('Registration Failed', message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={styles.screen}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Create Elder Account</Text>

//         <View style={styles.card}>
//           {/* Name */}
//           <View style={styles.field}>
//             <Text style={styles.label}>Full Name</Text>
//             <TextInput
//               value={name}
//               onChangeText={setName}
//               placeholder="Enter full name"
//               style={styles.input}
//               returnKeyType="next"
//             />
//             {name.trim() === '' ? <Text style={styles.helper}>Name is required</Text> : null}
//           </View>

//           {/* Email */}
//           <View style={styles.field}>
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               value={email}
//               onChangeText={setEmail}
//               placeholder="your@email.com"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               style={styles.input}
//               returnKeyType="next"
//             />
//             {!isEmailValid && email.length > 0 && (
//               <Text style={styles.errorText}>Enter a valid email address</Text>
//             )}
//           </View>

//           {/* Password */}
//           <View style={styles.field}>
//             <Text style={styles.label}>Password</Text>
//             <View style={styles.passwordRow}>
//               <TextInput
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="At least 6 characters"
//                 secureTextEntry={!showPassword}
//                 style={[styles.input, { flex: 1 }]}
//                 returnKeyType="next"
//               />
//               <TouchableOpacity
//                 onPress={() => setShowPassword((s) => !s)}
//                 style={styles.eyeBtn}
//                 activeOpacity={0.7}
//               >
//                 <Text style={styles.eyeText}>{showPassword ? 'Hide' : 'Show'}</Text>
//               </TouchableOpacity>
//             </View>
//             {!isPasswordValid && password.length > 0 && (
//               <Text style={styles.errorText}>Password must be at least 6 characters</Text>
//             )}
//           </View>

//           {/* Age */}
//           <View style={styles.field}>
//             <Text style={styles.label}>Age</Text>
//             <TextInput
//               value={age}
//               onChangeText={(t) => setAge(t.replace(/[^0-9]/g, ''))} // numeric only
//               placeholder="Enter age"
//               keyboardType="number-pad"
//               style={styles.input}
//               returnKeyType="done"
//             />
//             {!isAgeValid && age.length > 0 && (
//               <Text style={styles.errorText}>Enter a valid age (1 - 120)</Text>
//             )}
//           </View>

//           {/* Register button */}
//           <TouchableOpacity
//             style={[styles.submitBtn, !isFormValid && styles.submitBtnDisabled]}
//             onPress={handleRegister}
//             disabled={!isFormValid || loading}
//             activeOpacity={0.8}
//           >
//             {loading ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.submitText}>Register</Text>
//             )}
//           </TouchableOpacity>

//           {/* Footer */}
//           <View style={styles.footerRow}>
//             <Text style={styles.footerText}>Already have an account?</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('LoginAsElder' as never)}>
//               <Text style={styles.footerLink}> Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterAsElderScreen;

// const styles = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: '#F3F4F6' },
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: '#111827',
//   },

//   card: {
//     width: '100%',
//     maxWidth: 520,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 18,
//     shadowColor: '#000',
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 20,
//     elevation: 4,
//   },

//   field: {
//     marginBottom: 12,
//   },
//   label: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 6,
//   },
//   input: {
//     height: 44,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     fontSize: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   helper: {
//     marginTop: 6,
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   errorText: {
//     marginTop: 6,
//     fontSize: 12,
//     color: '#DC2626',
//   },

//   passwordRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   eyeBtn: {
//     marginLeft: 10,
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//   },
//   eyeText: {
//     color: '#2563EB',
//     fontWeight: '600',
//   },

//   submitBtn: {
//     marginTop: 8,
//     backgroundColor: '#2563EB',
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   submitBtnDisabled: {
//     backgroundColor: '#93C5FD',
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },

//   footerRow: {
//     marginTop: 12,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   footerText: {
//     color: '#6B7280',
//   },
//   footerLink: {
//     color: '#2563EB',
//     fontWeight: '700',
//   },
// });









// import React, { useState, useMemo } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import api from '../../utils/api';
// import axios from 'axios';

// const RegisterAsElderScreen = () => {
//   const navigation = useNavigation();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
//   const isPasswordValid = useMemo(() => password.length >= 6, [password]);
//   const isAgeValid = useMemo(() => {
//     const n = Number(age);
//     return Number.isInteger(n) && n > 0 && n < 120;
//   }, [age]);

//   const isFormValid =
//     isEmailValid && isPasswordValid && name.trim() !== '' && isAgeValid;

//   const handleRegister = async () => {
//     if (!isFormValid) {
//       Alert.alert('Invalid input', 'Please check your input fields.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await api.post('/auth/register', {
//         name,
//         email,
//         password,
//         age: Number(age),
//         role: 'elder',
//       });

//       console.log('Registered:', response.data);

//       Alert.alert('Success', 'Registration completed!', [
//         { text: 'Login', onPress: () => navigation.navigate('LoginAsElder' as never) },
//       ]);
//     } catch (err: any) {
//       console.log('Error:', err.response?.data || err);
//       Alert.alert('Error', err.response?.data?.message || 'Registration failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={styles.container}
//     >
//       <View style={styles.card}>

//         <Text style={styles.title}>Create Elder Account</Text>
//         <Text style={styles.subtitle}>Fill the details to continue</Text>

//         {/* Name */}
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={name}
//           onChangeText={setName}
//         />

//         {/* Email */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//           keyboardType="email-address"
//         />
//         {!isEmailValid && email.length > 0 && (
//           <Text style={styles.error}>Invalid email format</Text>
//         )}

//         {/* Password */}
//         <View style={styles.passwordRow}>
//           <TextInput
//             style={[styles.input, { flex: 1 }]}
//             placeholder="Password"
//             secureTextEntry={!showPassword}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity
//             onPress={() => setShowPassword(!showPassword)}
//             style={styles.showBtn}
//           >
//             <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text>
//           </TouchableOpacity>
//         </View>
//         {!isPasswordValid && password.length > 0 && (
//           <Text style={styles.error}>At least 6 characters</Text>
//         )}

//         {/* Age */}
//         <TextInput
//           style={styles.input}
//           placeholder="Age"
//           value={age}
//           onChangeText={(t) => setAge(t.replace(/[^0-9]/g, ''))}
//           keyboardType="number-pad"
//         />
//         {!isAgeValid && age.length > 0 && (
//           <Text style={styles.error}>Enter a valid age (1-120)</Text>
//         )}

//         {/* Register Button */}
//         <TouchableOpacity
//           style={[styles.button, !isFormValid && styles.disabledButton]}
//           disabled={!isFormValid || loading}
//           onPress={handleRegister}
//         >
//           {loading ? (
//             <ActivityIndicator color="#fff" />
//           ) : (
//             <Text style={styles.buttonText}>Register</Text>
//           )}
//         </TouchableOpacity>

//         {/* Footer */}
//         <Text style={styles.footer}>
//           Already have an account?{' '}
//           <Text
//             style={styles.link}
//             onPress={() => navigation.navigate('LoginAsElder' as never)}
//           >
//             Login
//           </Text>
//         </Text>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterAsElderScreen;

// /* ===================== STYLES ====================== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   card: {
//     width: '100%',
//     maxWidth: 420,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 25,

//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 6 },
//     shadowRadius: 12,
//     elevation: 10,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#111827',
//     textAlign: 'center',
//     marginBottom: 5,
//   },

//   subtitle: {
//     fontSize: 15,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   input: {
//     height: 48,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     backgroundColor: '#F9FAFB',
//     fontSize: 16,
//     marginBottom: 12,
//   },

//   passwordRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   showBtn: {
//     marginLeft: 10,
//     paddingHorizontal: 8,
//   },

//   showText: {
//     color: '#2563EB',
//     fontWeight: '600',
//   },

//   button: {
//     backgroundColor: '#22C55E',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,

//     shadowColor: '#22C55E',
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 6,
//   },

//   disabledButton: {
//     backgroundColor: '#9AE6B4',
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: '700',
//   },

//   footer: {
//     textAlign: 'center',
//     marginTop: 18,
//     color: '#374151',
//     fontSize: 15,
//   },

//   link: {
//     color: '#2563EB',
//     fontWeight: '700',
//   },

//   error: {
//     fontSize: 12,
//     color: '#DC2626',
//     marginBottom: 8,
//   },
// });








import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../utils/api';

const RegisterAsElderScreen = () => {
  const navigation = useNavigation();

  // State for all fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation
  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.length >= 6, [password]);
  const isAgeValid = useMemo(() => Number(age) > 0 && Number(age) < 120, [age]);
  const isPhoneValid = useMemo(() => /^[0-9]{10}$/.test(phone), [phone]);
  const isGenderValid = useMemo(
    () => ['male', 'female', 'other'].includes(gender.toLowerCase()),
    [gender]
  );

  const isFormValid =
    isEmailValid &&
    isPasswordValid &&
    name.trim() !== '' &&
    isAgeValid &&
    isPhoneValid &&
    isGenderValid &&
    address.trim() !== '';

  const handleRegister = async () => {
    if (!isFormValid) {
      Alert.alert('Invalid input', 'Please correct the form.');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
        age: Number(age),
        phone,
        address,
        gender,
        role: 'elder',
      });

      console.log('Registered:', response.data);

      Alert.alert('Success', 'Registration completed!', [
        { text: 'Login', onPress: () => navigation.navigate('LoginAsElder' as never) },
      ]);
    } catch (err: any) {
      console.log('Error:', err.response?.data || err);
      Alert.alert('Error', err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Create Elder Account</Text>
        <Text style={styles.subtitle}>Fill the details to continue</Text>

        {/* Full Name */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isEmailValid && email.length > 0 && (
          <Text style={styles.error}>Invalid email format</Text>
        )}

        {/* Password */}
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showBtn}
          >
            <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        {!isPasswordValid && password.length > 0 && (
          <Text style={styles.error}>Password must be at least 6 characters</Text>
        )}

        {/* Age */}
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="number-pad"
          value={age}
          onChangeText={(t) => setAge(t.replace(/[^0-9]/g, ''))}
        />
        {!isAgeValid && age.length > 0 && (
          <Text style={styles.error}>Enter a valid age (1–120)</Text>
        )}

        {/* Phone Number */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number (10 digits)"
          keyboardType="number-pad"
          maxLength={10}
          value={phone}
          onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, ''))}
        />
        {!isPhoneValid && phone.length > 0 && (
          <Text style={styles.error}>Enter a valid 10-digit phone number</Text>
        )}

        {/* Gender */}
        <TextInput
          style={styles.input}
          placeholder="Gender (Male / Female / Other)"
          value={gender}
          onChangeText={setGender}
        />
        {!isGenderValid && gender.length > 0 && (
          <Text style={styles.error}>Enter Male, Female, or Other</Text>
        )}

        {/* Address */}
        <TextInput
          style={[styles.input, { height: 70 }]}
          placeholder="Address"
          multiline
          value={address}
          onChangeText={setAddress}
        />
        {address.trim() === '' && (
          <Text style={styles.error}>Address cannot be empty</Text>
        )}

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.disabledButton]}
          disabled={!isFormValid || loading}
          onPress={handleRegister}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('LoginAsElder' as never)}
          >
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterAsElderScreen;

/* ===================== STYLES ====================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
    marginBottom: 12,
  },

  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  showBtn: {
    paddingHorizontal: 8,
  },

  showText: {
    color: '#2563EB',
    fontWeight: '600',
  },

  error: {
    fontSize: 12,
    color: '#DC2626',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#22C55E',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#9AE6B4',
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  footer: {
    marginTop: 18,
    textAlign: 'center',
  },

  link: {
    color: '#2563EB',
    fontWeight: '700',
  },
});

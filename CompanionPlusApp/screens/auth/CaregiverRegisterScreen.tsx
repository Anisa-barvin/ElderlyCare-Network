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

// const CaregiverRegisterScreen = () => {
//   const navigation = useNavigation<any>();


//   // Caregiver Form Fields
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [availability, setAvailability] = useState('');

//   // UI Controls
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Validations
//   const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
//   const isPasswordValid = useMemo(() => password.length >= 6, [password]);
//   const isPhoneValid = useMemo(() => /^[0-9]{10}$/.test(phone), [phone]);
//   const isGenderValid = useMemo(
//     () => ['male', 'female', 'other'].includes(gender.toLowerCase()),
//     [gender]
//   );
//   const isExperienceValid = useMemo(
//     () => Number(experience) >= 0 && Number(experience) < 50,
//     [experience]
//   );

//   const isFormValid =
//     name.trim() !== '' &&
//     isEmailValid &&
//     isPasswordValid &&
//     isPhoneValid &&
//     isGenderValid &&
//     address.trim() !== '' &&
//     skills.trim() !== '' &&
//     isExperienceValid &&
//     availability.trim() !== '';

 
//   const handleRegister = async () => {
//   if (!isFormValid) {
//     Alert.alert('Invalid input', 'Please correct the errors before submitting.');
//     return;
//   }

//   setLoading(true);

//   try {
//     const response = await api.post('/caregiver/register', {
//       name,
//       email,
//       password,
//       phone,
//       gender,
//       location: address,
//       skills: skills.split(',').map((s) => s.trim()),
//       experience: Number(experience),
//       availability,
//       role: 'caregiver',
//     });

//     console.log('Caregiver Registered:', response.data);

//     // ✅ OTP FLOW
//     Alert.alert(
//       'OTP Sent',
//       'An OTP has been sent to your email. Please verify.',
//       [
//         {
//           text: 'Verify Now',
//           onPress: () =>
//             navigation.navigate('VerifyOtp', {
//               email,
//               role: 'caregiver',
//             }),
//         },
//       ]
//     );
//   } catch (err: any) {
//     console.log('Caregiver Registration Error:', err.response?.data || err);
//     Alert.alert(
//       'Error',
//       err.response?.data?.message || 'Registration failed.'
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       style={styles.container}
//     >
//       <View style={styles.card}>
//         <Text style={styles.title}>Caregiver Registration</Text>
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
//           keyboardType="email-address"
//           autoCapitalize="none"
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
//           <Text style={styles.error}>Password must be at least 6 characters</Text>
//         )}

//         {/* Phone */}
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number (10 digits)"
//           keyboardType="number-pad"
//           maxLength={10}
//           value={phone}
//           onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, ''))}
//         />
//         {!isPhoneValid && phone.length > 0 && (
//           <Text style={styles.error}>Enter a valid 10-digit number</Text>
//         )}

//         {/* Gender */}
//         <TextInput
//           style={styles.input}
//           placeholder="Gender (Male / Female / Other)"
//           value={gender}
//           onChangeText={setGender}
//         />
//         {!isGenderValid && gender.length > 0 && (
//           <Text style={styles.error}>Enter Male, Female, or Other</Text>
//         )}

//         {/* Address */}
//         <TextInput
//           style={[styles.input, { height: 70 }]}
//           placeholder="Address"
//           multiline
//           value={address}
//           onChangeText={setAddress}
//         />

//         {/* Skills */}
//         <TextInput
//           style={styles.input}
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChangeText={setSkills}
//         />

//         {/* Experience */}
//         <TextInput
//           style={styles.input}
//           placeholder="Experience (years)"
//           keyboardType="number-pad"
//           value={experience}
//           onChangeText={(t) => setExperience(t.replace(/[^0-9]/g, ''))}
//         />
//         {!isExperienceValid && experience.length > 0 && (
//           <Text style={styles.error}>Enter valid experience (0–50)</Text>
//         )}

//         {/* Availability */}
//         <TextInput
//           style={styles.input}
//           placeholder="Availability (Full-time / Part-time / Hourly)"
//           value={availability}
//           onChangeText={setAvailability}
//         />

//         {/* Register Button */}
//         <TouchableOpacity
//           style={[styles.button, !isFormValid && styles.disabledButton]}
//           disabled={!isFormValid || loading}
//           onPress={handleRegister}
//         >
//           {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
//         </TouchableOpacity>

//         {/* Footer */}
//         <Text style={styles.footer}>
//           Already have an account?
//           <Text
//             style={styles.link}
//             onPress={() => navigation.navigate('CaregiverLogin' as never)}
//           >
//             {' '}Login
//           </Text>
//         </Text>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default CaregiverRegisterScreen;

// /* ===================== STYLES ====================== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#b1c9e1ff',
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
//     elevation: 10,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     textAlign: 'center',
//   },

//   subtitle: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#6B7280',
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
//     paddingHorizontal: 8,
//   },

//   showText: {
//     color: '#2563EB',
//     fontWeight: '600',
//   },

//   error: {
//     fontSize: 12,
//     color: '#DC2626',
//     marginBottom: 5,
//   },

//   button: {
//     backgroundColor: '#2563EB',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   disabledButton: {
//     backgroundColor: '#93C5FD',
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: '700',
//   },

//   footer: {
//     marginTop: 18,
//     textAlign: 'center',
//   },

//   link: {
//     color: '#2563EB',
//     fontWeight: '700',
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

const CaregiverRegisterScreen = () => {
  const navigation = useNavigation<any>();


  // Caregiver Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [availability, setAvailability] = useState('');

  // UI Controls
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validations
  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const isPasswordValid = useMemo(() => password.length >= 6, [password]);
  const isPhoneValid = useMemo(() => /^[0-9]{10}$/.test(phone), [phone]);
  const isGenderValid = useMemo(
    () => ['male', 'female', 'other'].includes(gender.toLowerCase()),
    [gender]
  );
  const isExperienceValid = useMemo(
    () => Number(experience) >= 0 && Number(experience) < 50,
    [experience]
  );

  const isFormValid =
    name.trim() !== '' &&
    isEmailValid &&
    isPasswordValid &&
    isPhoneValid &&
    isGenderValid &&
    address.trim() !== '' &&
    skills.trim() !== '' &&
    isExperienceValid &&
    availability.trim() !== '';

 
  const handleRegister = async () => {
  if (!isFormValid) {
    Alert.alert('Invalid input', 'Please correct the errors before submitting.');
    return;
  }

  setLoading(true);

  try {
    const response = await api.post('/caregiver/register', {
      name,
      email,
      password,
      phone,
      gender,
      location: address,
      skills: skills.split(',').map((s) => s.trim()),
      experience: Number(experience),
      availability,
      role: 'caregiver',
    });

    console.log('Caregiver Registered:', response.data);

    // ✅ OTP FLOW
    setTimeout(() => {
  navigation.navigate('VerifyOtp', {
    email,
    role: 'caregiver',
  });
}, 300);
  } catch (err: any) {
      if (err.response?.status === 403) {
        Alert.alert('Email Not Verified', 'Please verify your email');
  
       setTimeout(() => {
    navigation.navigate('VerifyOtp', {
      email,
      role: 'caregiver',
    });
  }, 300);
  
      } else {
        Alert.alert(
          'Registration Failed',
          err.response?.data?.message || 'Something went wrong'
        );
      }
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
        <Text style={styles.title}>Caregiver Registration</Text>
        <Text style={styles.subtitle}>Fill the details to continue</Text>

        {/* Name */}
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

        {/* Phone */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number (10 digits)"
          keyboardType="number-pad"
          maxLength={10}
          value={phone}
          onChangeText={(t) => setPhone(t.replace(/[^0-9]/g, ''))}
        />
        {!isPhoneValid && phone.length > 0 && (
          <Text style={styles.error}>Enter a valid 10-digit number</Text>
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

        {/* Skills */}
        <TextInput
          style={styles.input}
          placeholder="Skills (comma separated)"
          value={skills}
          onChangeText={setSkills}
        />

        {/* Experience */}
        <TextInput
          style={styles.input}
          placeholder="Experience (years)"
          keyboardType="number-pad"
          value={experience}
          onChangeText={(t) => setExperience(t.replace(/[^0-9]/g, ''))}
        />
        {!isExperienceValid && experience.length > 0 && (
          <Text style={styles.error}>Enter valid experience (0–50)</Text>
        )}

        {/* Availability */}
        <TextInput
          style={styles.input}
          placeholder="Availability (Full-time / Part-time / Hourly)"
          value={availability}
          onChangeText={setAvailability}
        />

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.disabledButton]}
          disabled={!isFormValid || loading}
          onPress={handleRegister}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('CaregiverLogin' as never)}
          >
            {' '}Login
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CaregiverRegisterScreen;

/* ===================== STYLES ====================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
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
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#93C5FD',
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

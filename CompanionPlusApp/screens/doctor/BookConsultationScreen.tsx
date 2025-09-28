// Path: CompanionPlusApp/screens/doctor/BookConsultationScreen.tsx
/*
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import axios from '../../utils/api';

type RootStackParamList = {
  BookConsultationScreen: { doctorId: string };
};

type BookConsultationScreenRouteProp = RouteProp<
  RootStackParamList,
  'BookConsultationScreen'
>;

const BookConsultationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<BookConsultationScreenRouteProp>();
  const { doctorId } = route.params;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post('/consultations', {
        doctorId,
        date,
        notes,
      });
      Alert.alert('Success', 'Consultation booked successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Booking error:', error);
      Alert.alert('Error', 'Failed to book consultation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Consultation</Text>

      <Text style={styles.label}>Select Date & Time:</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.datePickerButton}>
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Notes (Optional):</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe symptoms or preferences..."
        multiline
        numberOfLines={4}
        value={notes}
        onChangeText={setNotes}
      />

      <Button
        title={loading ? 'Booking...' : 'Confirm Consultation'}
        onPress={handleSubmit}
        disabled={loading}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  datePickerButton: {
    padding: 12,
    backgroundColor: '#EEE',
    borderRadius: 8,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 100,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    backgroundColor: '#FFF',
  },
});

export default BookConsultationScreen;
*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookConsultationScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [relation, setRelation] = useState('');
  const [consultationType, setConsultationType] = useState('Online');
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleBook = () => {
    // handle booking logic here
    console.log('Booking Submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Book Consultation</Text>

      {/* Doctor Info (Static Example) */}
      <View style={styles.card}>
        <Text style={styles.label}>Doctor: Dr. Priya Sharma</Text>
        <Text style={styles.label}>Speciality: Cardiologist</Text>
        <Text style={styles.label}>Clinic: ABC Hospital</Text>
      </View>

      <Text style={styles.section}>Patient Information</Text>

      <TextInput style={styles.input} placeholder="Patient Name" value={patientName} onChangeText={setPatientName} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Relation to Elder" value={relation} onChangeText={setRelation} />

      <Text style={styles.section}>Consultation Details</Text>

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateButton}>Select Date: {date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <Text style={styles.dateButton}>Select Time: {time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) setTime(selectedTime);
          }}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Type of Consultation (Online / In-person)"
        value={consultationType}
        onChangeText={setConsultationType}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Symptoms / Health Concern"
        multiline
        value={symptoms}
        onChangeText={setSymptoms}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Message to Doctor (Optional)"
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <Text style={styles.section}>Contact Info</Text>

      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
      <TextInput style={styles.input} placeholder="Email (optional)" keyboardType="email-address" value={email} onChangeText={setEmail} />

      <Button title="Book Consultation" onPress={handleBook} color="#007AFF" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
  },
  dateButton: {
    color: '#007AFF',
    marginBottom: 10,
  },
});

export default BookConsultationScreen;

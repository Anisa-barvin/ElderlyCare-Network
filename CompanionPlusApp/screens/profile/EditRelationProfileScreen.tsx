import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  // ✅ SAME CONTENT (UNCHANGED)
  const [name, setName] = useState('Jane Smith');
  const [age, setAge] = useState('45');
  const [relationship, setRelationship] = useState('Daughter');
  const [address, setAddress] = useState('456 Family St, City, Country');
  const [contact, setContact] = useState('1234567890');

  const saveProfile = () => {
    console.log('Profile Updated:', {
      name,
      age,
      relationship,
      address,
      contact,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit your Profile</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* BODY */}
        <ScrollView contentContainerStyle={styles.body}>

          {/* LEFT PANEL (PHOTO) */}
          <View style={styles.leftPanel}>
            <Text style={styles.photoLabel}>Photo:</Text>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonText}>CHANGE PHOTO</Text>
            </TouchableOpacity>
          </View>

          {/* RIGHT PANEL (FORM) */}
          <View style={styles.rightPanel}>

            <View style={styles.field}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input} value={name} onChangeText={setName} />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={age}
                keyboardType="numeric"
                onChangeText={setAge}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Relationship</Text>
              <TextInput
                style={styles.input}
                value={relationship}
                onChangeText={setRelationship}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={address}
                multiline
                onChangeText={setAddress}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Contact</Text>
              <TextInput
                style={styles.input}
                value={contact}
                keyboardType="phone-pad"
                onChangeText={setContact}
              />
            </View>

          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.footerText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
            <Text style={styles.footerText}>Save</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default EditProfileScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    maxWidth: 900,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    overflow: 'hidden',
  },

  /* HEADER */
  header: {
    backgroundColor: '#4FA3D1',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  close: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  /* BODY */
  body: {
    flexDirection: 'row',
    padding: 20,
  },

  leftPanel: {
    width: '30%',
    alignItems: 'center',
  },
  photoLabel: {
    marginBottom: 10,
    fontWeight: '600',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#475569',
  },
  photoButton: {
    backgroundColor: '#4FA3D1',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  photoButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  rightPanel: {
    width: '70%',
    paddingLeft: 30,
  },

  field: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 10,
    fontSize: 15,
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },

  /* FOOTER */
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  cancelBtn: {
    backgroundColor: '#4FA3D1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  saveBtn: {
    backgroundColor: '#0a739dff',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
  },
  footerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

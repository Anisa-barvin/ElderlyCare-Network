import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoleSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Role</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginAsElder" as never)}
      >
        <Text style={styles.buttonText}>Elder</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.caregiverButton]}
        onPress={() => navigation.navigate("CaregiverLogin" as never)}
      >
        <Text style={styles.buttonText}>Caregiver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 40,
    color: "#111827",
  },
  button: {
    width: "80%",
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  caregiverButton: {
    backgroundColor: "#2563EB",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

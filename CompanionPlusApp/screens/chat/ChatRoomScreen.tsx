/*
// Path: CompanionPlusApp/screens/chat/ChatRoomScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '../../navigation/RootNavigator';

// Define the route prop type
type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoomScreen'>;

const ChatRoomScreen = ({ route }: { route: ChatRoomScreenRouteProp }) => {
  const navigation = useNavigation();
  const { chatId, chatName } = route.params;

  // Sample messages (In a real app, messages would be fetched from an API or database)
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, how are you?', sender: 'Caregiver: John Doe' },
    { id: '2', text: 'I am doing well, thank you!', sender: 'Elder: Jane Smith' },
  ]);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: message,
        sender: 'Elder: Jane Smith', // Change this based on the current user
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      Keyboard.dismiss();
    }
  };

  const renderItem = ({ item }: { item: { id: string, text: string, sender: string } }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.chatName}>{chatName}</Text>

  
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted
        style={styles.messagesList}
      />

      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  chatName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  messagesList: {
    flex: 1,
    marginBottom: 16,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sender: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatRoomScreen;
*/

// ChatRoomScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootNavigator';

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoomScreen'>;

const ChatRoomScreen = () => {
  const route = useRoute<ChatRoomScreenRouteProp>();
  const { chatId, chatName } = route.params;

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, how are you?', sender: 'Caregiver: John Doe' },
    { id: '2', text: 'I am doing well, thank you!', sender: 'Elder: Jane Smith' },
  ]);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: message,
        sender: 'Elder: Jane Smith',
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      Keyboard.dismiss();
    }
  };

  const renderItem = ({ item }: { item: { id: string; text: string; sender: string } }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.chatName}>{chatName}</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted
        style={styles.messagesList}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  chatName: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginBottom: 10 },
  messagesList: { flex: 1, marginBottom: 16 },
  messageContainer: { marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
  sender: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  message: { fontSize: 16, color: '#777', marginTop: 4 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 10, paddingHorizontal: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, padding: 10, fontSize: 16, backgroundColor: '#fff' },
  sendButton: { marginLeft: 10, backgroundColor: '#4CAF50', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  sendButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ChatRoomScreen;

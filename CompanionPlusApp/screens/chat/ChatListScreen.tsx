import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

type ChatListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChatListScreen'>;

const ChatListScreen = () => {
  const navigation = useNavigation<ChatListScreenNavigationProp>();

  const chats = [
    { id: '1', name: 'Caregiver: John Doe', lastMessage: 'How are you feeling today?' },
    { id: '2', name: 'Family Member: Sarah', lastMessage: 'Did you take your medicine?' },
    { id: '3', name: 'Caregiver: Emma', lastMessage: 'Your next appointment is on Thursday.' },
  ];

  const handleChatPress = (chatId: string, chatName: string) => {
    navigation.navigate('ChatRoomScreen', { chatId, chatName });
  };

  const renderItem = ({ item }: { item: { id: string, name: string, lastMessage: string } }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item.id, item.name)}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat List</Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  chatItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});

export default ChatListScreen;

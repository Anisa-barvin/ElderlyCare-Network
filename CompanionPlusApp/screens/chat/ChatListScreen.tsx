// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// type ChatListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChatListScreen'>;

// const ChatListScreen = () => {
//   const navigation = useNavigation<ChatListScreenNavigationProp>();

//   const chats = [
//     { id: '1', name: 'Caregiver: John Doe', lastMessage: 'How are you feeling today?' },
//     { id: '2', name: 'Family Member: Sarah', lastMessage: 'Did you take your medicine?' },
//     { id: '3', name: 'Caregiver: Emma', lastMessage: 'Your next appointment is on Thursday.' },
//   ];

//   const handleChatPress = (chatId: string, chatName: string) => {
//     navigation.navigate('ChatRoomScreen', { chatId, chatName });
//   };

//   const renderItem = ({ item }: { item: { id: string, name: string, lastMessage: string } }) => (
//     <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item.id, item.name)}>
//       <Text style={styles.chatName}>{item.name}</Text>
//       <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Chat List</Text>
//       <FlatList
//         data={chats}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginBottom: 20,
//   },
//   chatItem: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   chatName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   lastMessage: {
//     fontSize: 14,
//     color: '#777',
//     marginTop: 4,
//   },
// });

// export default ChatListScreen;








// // Path: CompanionPlusApp/screens/chat/ChatListScreen.tsx
// import React, { useState, useMemo, useCallback } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   TextInput,
//   RefreshControl,
//   Platform,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// type ChatListScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'ChatListScreen'
// >;

// type ChatItem = {
//   id: string;
//   name: string;
//   lastMessage: string;
//   time?: string; // e.g. "2h", "Yesterday", "10:30"
//   unreadCount?: number;
//   online?: boolean;
// };


// const initialChats: ChatItem[] = [
//   {
//     id: '1',
//     name: 'John Doe (Caregiver)',
//     lastMessage: 'How are you feeling today?',
//     time: '2h',
//     unreadCount: 1,
//     online: true,
//   },
 
//   {
//     id: '3',
//     name: 'Emma (Caregiver)',
//     lastMessage: 'Your next appointment is on Thursday.',
//     time: '10:30',
//     unreadCount: 3,
//     online: true,
//   },
 
// ];

// const ChatListScreen: React.FC = () => {
//   const navigation = useNavigation<ChatListScreenNavigationProp>();
//   const [chats, setChats] = useState<ChatItem[]>(initialChats);
//   const [query, setQuery] = useState('');
//   const [refreshing, setRefreshing] = useState(false);

//   // Filtered list (memoized)
//   const filtered = useMemo(() => {
//     if (!query.trim()) return chats;
//     const q = query.toLowerCase();
//     return chats.filter(
//       (c) =>
//         c.name.toLowerCase().includes(q) ||
//         c.lastMessage.toLowerCase().includes(q)
//     );
//   }, [chats, query]);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     // simulate network refresh - in real app fetch from server
//     setTimeout(() => {
//       // For demo, toggle unread for first item
//       setChats((prev) =>
//         prev.map((c, i) =>
//           i === 0 ? { ...c, lastMessage: 'Refreshed — hello!', time: 'Now' } : c
//         )
//       );
//       setRefreshing(false);
//     }, 1000);
//   }, []);

//   const handleChatPress = (chatId: string, chatName: string) => {
//     navigation.navigate('ChatRoomScreen', { chatId, chatName } as never);
//   };

//   const renderItem = ({ item }: { item: ChatItem }) => {
//     const initials = item.name
//       .split(' ')
//       .map((s) => s.charAt(0))
//       .slice(0, 2)
//       .join('')
//       .toUpperCase();

//     return (
//       <TouchableOpacity
//         style={styles.chatItem}
//         activeOpacity={0.7}
//         onPress={() => handleChatPress(item.id, item.name)}
//       >
//         {/* Avatar + online */}
//         <View style={styles.leftColumn}>
//           <View style={styles.avatarContainer}>
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>{initials}</Text>
//             </View>
//             {item.online && <View style={styles.onlineDot} />}
//           </View>
//         </View>

//         {/* Middle: name + last message */}
//         <View style={styles.midColumn}>
//           <Text style={styles.chatName} numberOfLines={1}>
//             {item.name}
//           </Text>
//           <Text style={styles.lastMessage} numberOfLines={1}>
//             {item.lastMessage}
//           </Text>
//         </View>

//         {/* Right: time + unread */}
//         <View style={styles.rightColumn}>
//           <Text style={styles.timeText}>{item.time || ''}</Text>
//           {item.unreadCount ? (
//             <View style={styles.unreadBadge}>
//               <Text style={styles.unreadText}>
//                 {item.unreadCount > 9 ? '9+' : item.unreadCount}
//               </Text>
//             </View>
//           ) : null}
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Messages</Text>
//         <TouchableOpacity
//           style={styles.newBtn}
//           onPress={() => {
//             // example action: open new chat or contact list
//             // navigation.navigate('NewChat' as never);
//             // for now just console
//             console.log('New chat tapped');
//           }}
//         >
//           <Text style={styles.newBtnText}>+ New</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Search */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search chats or messages..."
//           placeholderTextColor="#9CA3AF"
//           value={query}
//           onChangeText={setQuery}
//           style={styles.searchInput}
//         />
//       </View>

//       {/* List */}
//       <FlatList
//         data={filtered}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//         ListEmptyComponent={
//           <View style={styles.empty}>
//             <Text style={styles.emptyTitle}>No conversations</Text>
//             <Text style={styles.emptySub}>
//               Try starting a new conversation or adjust your search.
//             </Text>
//             <TouchableOpacity
//               style={styles.emptyBtn}
//               onPress={() => console.log('Start new chat')}
//             >
//               <Text style={styles.emptyBtnText}>Start Chat</Text>
//             </TouchableOpacity>
//           </View>
//         }
//         contentContainerStyle={
//           filtered.length === 0 ? { flex: 1, justifyContent: 'center' } : {}
//         }
//       />
//     </View>
//   );
// };

// export default ChatListScreen;

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     paddingHorizontal: 12,
//     paddingTop: Platform.OS === 'web' ? 20 : 8,
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//     paddingHorizontal: 6,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   newBtn: {
//     backgroundColor: '#10B981',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },
//   newBtnText: {
//     color: '#fff',
//     fontWeight: '700',
//   },

//   searchContainer: {
//     paddingHorizontal: 6,
//     marginBottom: 10,
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: Platform.OS === 'web' ? 10 : 8,
//     paddingHorizontal: 14,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     fontSize: 15,
//     color: '#111827',
//   },

//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 6,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginVertical: 6,
//     marginHorizontal: 6,
//     // shadow for mobile
//     shadowColor: '#000',
//     shadowOpacity: 0.06,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 2,
//   },

//   leftColumn: {
//     width: 64,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     backgroundColor: '#E5E7EB',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   avatarText: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#374151',
//   },
//   onlineDot: {
//     position: 'absolute',
//     right: -2,
//     bottom: -2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#10B981',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },

//   midColumn: {
//     flex: 1,
//     paddingHorizontal: 12,
//     justifyContent: 'center',
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   lastMessage: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 4,
//   },

//   rightColumn: {
//     width: 72,
//     alignItems: 'flex-end',
//     paddingRight: 4,
//   },
//   timeText: {
//     fontSize: 12,
//     color: '#9CA3AF',
//   },
//   unreadBadge: {
//     marginTop: 8,
//     backgroundColor: '#EF4444',
//     minWidth: 22,
//     height: 22,
//     borderRadius: 11,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 6,
//   },
//   unreadText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '700',
//   },

//   separator: {
//     height: 6,
//   },

//   empty: {
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   emptyTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 8,
//   },
//   emptySub: {
//     fontSize: 14,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   emptyBtn: {
//     backgroundColor: '#10B981',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   emptyBtnText: {
//     color: '#fff',
//     fontWeight: '700',
//   },
// });




import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  RefreshControl,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { RootStackParamList } from '../../navigation/RootNavigator';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatListScreen'
>;

type ChatItem = {
  _id: string;
  name: string;
  lastMessage?: string;
  time?: string;
  unreadCount?: number;
  online?: boolean;
};

const ChatListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [chats, setChats] = useState<ChatItem[]>([]);
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  /* ================= FETCH ELDERS ================= */
  const loadChats = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const res = await api.get('/users/elders', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const formatted = res.data.map((u: any) => ({
        _id: u._id,
        name: u.name,
        lastMessage: 'Tap to start chatting',
        time: '',
        unreadCount: 0,
        online: true,
      }));

      setChats(formatted);
    } catch (error) {
      console.log('CHAT LIST ERROR:', error);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  /* ================= SEARCH ================= */
  const filteredChats = useMemo(() => {
    if (!query.trim()) return chats;
    const q = query.toLowerCase();
    return chats.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.lastMessage?.toLowerCase().includes(q)
    );
  }, [chats, query]);

  /* ================= REFRESH ================= */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadChats().finally(() => setRefreshing(false));
  }, []);

  /* ================= NAVIGATION ================= */
  const handleChatPress = (userId: string, name: string) => {
    navigation.navigate('ChatRoomScreen', {
      chatId: userId,
      chatName: name,
    });
  };

  /* ================= RENDER ITEM ================= */
  const renderItem = ({ item }: { item: ChatItem }) => {
    const initials = item.name
      .split(' ')
      .map((s) => s.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <TouchableOpacity
        style={styles.chatItem}
        activeOpacity={0.75}
        onPress={() => handleChatPress(item._id, item.name)}
      >
        {/* Avatar */}
        <View style={styles.leftColumn}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
            {item.online && <View style={styles.onlineDot} />}
          </View>
        </View>

        {/* Info */}
        <View style={styles.midColumn}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>

        {/* Right */}
        <View style={styles.rightColumn}>
          <Text style={styles.timeText}>{item.time}</Text>
          {item.unreadCount ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity style={styles.newBtn}>
          <Text style={styles.newBtnText}>+ New</Text>
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search elders..."
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No Elders Found</Text>
            <Text style={styles.emptySub}>
              Start a conversation with another elder.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default ChatListScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingTop: Platform.OS === 'web' ? 20 : 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  newBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  newBtnText: {
    color: '#fff',
    fontWeight: '700',
  },

  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  chatItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 14,
    marginVertical: 6,
    elevation: 2,
  },

  leftColumn: { width: 70, alignItems: 'center' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: '700',
    fontSize: 18,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    backgroundColor: '#10B981',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
  },

  midColumn: { flex: 1, paddingHorizontal: 10 },
  chatName: { fontSize: 16, fontWeight: '700' },
  lastMessage: { fontSize: 13, color: '#6B7280', marginTop: 4 },

  rightColumn: { width: 60, alignItems: 'flex-end' },
  timeText: { fontSize: 12, color: '#9CA3AF' },
  unreadBadge: {
    marginTop: 6,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    paddingHorizontal: 6,
  },
  unreadText: { color: '#fff', fontSize: 12 },

  empty: { alignItems: 'center', marginTop: 40 },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptySub: { fontSize: 14, color: '#6B7280', marginTop: 6 },
});

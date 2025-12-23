



// import React, { useEffect, useState, useMemo, useCallback } from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// type NavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'ChatListScreen'
// >;

// type ChatItem = {
//   _id: string;
//   name: string;
//   lastMessage?: string;
//   time?: string;
//   unreadCount?: number;
//   online?: boolean;
// };

// const ChatListScreen: React.FC = () => {
//   const navigation = useNavigation<NavigationProp>();

//   const [chats, setChats] = useState<ChatItem[]>([]);
//   const [query, setQuery] = useState('');
//   const [refreshing, setRefreshing] = useState(false);

//   /* ================= FETCH ELDERS ================= */
//   const loadChats = async () => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       const res = await api.get('/users/elders', {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const formatted = res.data.map((u: any) => ({
//         _id: u._id,
//         name: u.name,
//         lastMessage: 'Tap to start chatting',
//         time: '',
//         unreadCount: 0,
//         online: true,
//       }));

//       setChats(formatted);
//     } catch (error) {
//       console.log('CHAT LIST ERROR:', error);
//     }
//   };

//   useEffect(() => {
//     loadChats();
//   }, []);

//   /* ================= SEARCH ================= */
//   const filteredChats = useMemo(() => {
//     if (!query.trim()) return chats;
//     const q = query.toLowerCase();
//     return chats.filter(
//       (c) =>
//         c.name.toLowerCase().includes(q) ||
//         c.lastMessage?.toLowerCase().includes(q)
//     );
//   }, [chats, query]);

//   /* ================= REFRESH ================= */
//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     loadChats().finally(() => setRefreshing(false));
//   }, []);

//   /* ================= NAVIGATION ================= */
//   const handleChatPress = (userId: string, name: string) => {
//     navigation.navigate('ChatRoomScreen', {
//       chatId: userId,
//       chatName: name,
//     });
//   };

//   /* ================= RENDER ITEM ================= */
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
//         activeOpacity={0.75}
//         onPress={() => handleChatPress(item._id, item.name)}
//       >
//         {/* Avatar */}
//         <View style={styles.leftColumn}>
//           <View style={styles.avatarContainer}>
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>{initials}</Text>
//             </View>
//             {item.online && <View style={styles.onlineDot} />}
//           </View>
//         </View>

//         {/* Info */}
//         <View style={styles.midColumn}>
//           <Text style={styles.chatName} numberOfLines={1}>
//             {item.name}
//           </Text>
//           <Text style={styles.lastMessage} numberOfLines={1}>
//             {item.lastMessage}
//           </Text>
//         </View>

//         {/* Right */}
//         <View style={styles.rightColumn}>
//           <Text style={styles.timeText}>{item.time}</Text>
//           {item.unreadCount ? (
//             <View style={styles.unreadBadge}>
//               <Text style={styles.unreadText}>{item.unreadCount}</Text>
//             </View>
//           ) : null}
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Messages</Text>
//       </View>

//       {/* SEARCH */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search elders..."
//           placeholderTextColor="#9CA3AF"
//           value={query}
//           onChangeText={setQuery}
//           style={styles.searchInput}
//         />
//       </View>

//       {/* LIST */}
//       <FlatList
//         data={filteredChats}
//         keyExtractor={(item) => item._id}
//         renderItem={renderItem}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//         ListEmptyComponent={
//           <View style={styles.empty}>
//             <Text style={styles.emptyTitle}>No Elders Found</Text>
//             <Text style={styles.emptySub}>
//               Start a conversation with another elder.
//             </Text>
//           </View>
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
//     backgroundColor: '#b1c9e1ff',
//     paddingHorizontal: 12,
//     paddingTop: Platform.OS === 'web' ? 20 : 8,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   newBtn: {
//     backgroundColor: '#10B981',
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },
//   newBtnText: {
//     color: '#fff',
//     fontWeight: '700',
//   },

//   searchContainer: {
//     marginBottom: 10,
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },

//   chatItem: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 14,
//     paddingVertical: 14,
//     marginVertical: 6,
//     elevation: 2,
//   },

//   leftColumn: { width: 70, alignItems: 'center' },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     backgroundColor: '#E5E7EB',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   avatarText: {
//     fontWeight: '700',
//     fontSize: 18,
//   },
//   onlineDot: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     backgroundColor: '#10B981',
//     borderRadius: 6,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },

//   midColumn: { flex: 1, paddingHorizontal: 10 },
//   chatName: { fontSize: 16, fontWeight: '700' },
//   lastMessage: { fontSize: 13, color: '#6B7280', marginTop: 4 },

//   rightColumn: { width: 60, alignItems: 'flex-end' },
//   timeText: { fontSize: 12, color: '#9CA3AF' },
//   unreadBadge: {
//     marginTop: 6,
//     backgroundColor: '#EF4444',
//     borderRadius: 10,
//     paddingHorizontal: 6,
//   },
//   unreadText: { color: '#fff', fontSize: 12 },

//   empty: { alignItems: 'center', marginTop: 40 },
//   emptyTitle: { fontSize: 18, fontWeight: '700' },
//   emptySub: { fontSize: 14, color: '#6B7280', marginTop: 6 },
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
        style={styles.chatCard}
        activeOpacity={0.85}
        onPress={() => handleChatPress(item._id, item.name)}
      >
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
          {item.online && <View style={styles.onlineDot} />}
        </View>

        {/* Info */}
        <View style={styles.chatInfo}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>

        {/* Right */}
        <View style={styles.rightInfo}>
          {item.time ? <Text style={styles.time}>{item.time}</Text> : null}
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
        <Text style={styles.title}>Chats</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
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
            <Text style={styles.emptyTitle}>No Chats Yet</Text>
            <Text style={styles.emptySub}>
              Start chatting with another elder
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
    backgroundColor: '#b1c9e1ff',
    paddingHorizontal: 14,
    paddingTop: Platform.OS === 'web' ? 20 : 10,
  },

  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E3A8A',
  },

  searchBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12,
    elevation: 3,
  },
  searchInput: {
    fontSize: 16,
  },

  chatCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginVertical: 6,
    alignItems: 'center',
    elevation: 3,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
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
    borderColor: '#FFFFFF',
  },

  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  lastMessage: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  rightInfo: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  unreadBadge: {
    marginTop: 6,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
  },
  emptySub: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
  },
});

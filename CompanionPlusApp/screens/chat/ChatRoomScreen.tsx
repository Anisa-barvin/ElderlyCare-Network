
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "../../utils/api";
// import { useRoute } from "@react-navigation/native";

// type Message = {
//   _id: string;
//   text: string;
//   senderId: string;
//   createdAt: string;
// };

// const ChatRoomScreen = () => {
//   const route = useRoute<any>();
//   const { chatId, chatName } = route.params;

//   const [messages, setMessages] = useState<Message[]>([]);
//   const [text, setText] = useState("");
//   const [myId, setMyId] = useState("");

//   /* ================= INIT ================= */
//   useEffect(() => {
//     init();
//   }, []);



//   const init = async () => {
//     const token = await AsyncStorage.getItem("token");
//     if (!token) return;

//     const payload = JSON.parse(atob(token.split(".")[1]));
//     setMyId(payload.id);

//     loadMessages();
//   };

//   /* ================= LOAD CHAT ================= */
// const loadMessages = async () => {
//   try {
//     const token = await AsyncStorage.getItem("token");
//     const res = await api.get<Message[]>(`/messages/${chatId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     setMessages(prev => {
//       const map = new Map(prev.map(m => [m._id, m]));
//       res.data.forEach(m => map.set(m._id, m));
//       return Array.from(map.values()).sort(
//         (a, b) =>
//           new Date(a.createdAt).getTime() -
//           new Date(b.createdAt).getTime()
//       );
//     });

//   } catch (err) {
//     console.log("Load message error:", err);
//   }
// };


//  useEffect(() => {
//   loadMessages();

//   const interval = setInterval(() => {
//     loadMessages();
//   }, 500); // 🔥 faster

//   return () => clearInterval(interval);
// }, []);




//   /* ================= SEND MESSAGE ================= */
//  const sendMessage = async () => {
//   if (!text.trim()) return;

//   try {
//     const token = await AsyncStorage.getItem("token");

//     await api.post(
//       "/messages",
//       {
//         receiverId: chatId,
//         text,
//       },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     setText(""); // Clear input
//     // ❌ DO NOT add message locally
//     // ✅ Polling will fetch it

//   } catch (err) {
//     console.log("Send message error:", err);
//   }
// };




//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       {/* HEADER */}
//       <View style={styles.header}>
//         <View style={styles.avatar}>
//           <Text style={styles.avatarText}>
//             {chatName.charAt(0).toUpperCase()}
//           </Text>
//         </View>
//         <Text style={styles.headerName}>{chatName}</Text>
//       </View>

//       {/* MESSAGES */}
//       <FlatList
//         data={messages}
//         inverted
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => {
//           const isMe = item.senderId === myId;
//           return (
//             <View
//               style={[
//                 styles.bubble,
//                 isMe ? styles.right : styles.left,
//               ]}
//             >
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.time}>
//                 {new Date(item.createdAt).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </Text>
//             </View>
//           );
//         }}
//       />

//       {/* INPUT */}
//       <View style={styles.inputRow}>
//         <TextInput
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//           placeholder="Type a message..."
//         />
//         <TouchableOpacity
//           style={styles.sendBtn}
//           onPress={sendMessage}
//         >
//           <Text style={styles.sendText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default ChatRoomScreen;


// /* ---------------- STYLES ---------------- */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//   },

//   /* HEADER */
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 14,
//     backgroundColor: "#FFFFFF",
//     borderBottomWidth: 1,
//     borderColor: "#E5E7EB",
//   },
//   avatar: {
//     width: 42,
//     height: 42,
//     borderRadius: 21,
//     backgroundColor: "#4CAF50",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   avatarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   headerName: {
//     fontSize: 17,
//     fontWeight: "bold",
//   },
//   online: {
//     fontSize: 12,
//     color: "#10B981",
//   },

//   /* CHAT */
//   bubble: {
//     maxWidth: "75%",
//     padding: 12,
//     borderRadius: 14,
//     marginVertical: 6,
//   },
//   left: {
//     backgroundColor: "#FFFFFF",
//     alignSelf: "flex-start",
//     borderBottomLeftRadius: 0,
//   },
//   right: {
//     backgroundColor: "#A5E6A3",
//     alignSelf: "flex-end",
//     borderBottomRightRadius: 0,
//   },
//   messageText: {
//     fontSize: 16,
//     color: "#111827",
//   },
//   time: {
//     fontSize: 10,
//     color: "#6B7280",
//     marginTop: 4,
//     textAlign: "right",
//   },

//   typing: {
//     fontSize: 13,
//     color: "#6B7280",
//     paddingLeft: 12,
//   },

//   /* INPUT */
//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 8,
//   },
//   input: {
//     flex: 1,
//     paddingHorizontal: 14,
//     fontSize: 16,
//   },
//   sendBtn: {
//     backgroundColor: "#4CAF50",
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   sendText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
// });





// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "../../utils/api";
// import { useRoute } from "@react-navigation/native";

// type Message = {
//   _id: string;
//   text: string;
//   senderId: string;
//   createdAt: string;
// };

// const ChatRoomScreen = () => {
//   const route = useRoute<any>();
//   const { chatId, chatName } = route.params;

//   const [messages, setMessages] = useState<Message[]>([]);
//   const [text, setText] = useState("");
//   const [myId, setMyId] = useState("");
//   const [isAtBottom, setIsAtBottom] = useState(true);

//   const flatListRef = useRef<FlatList>(null);

//   /* ================= INIT ================= */
//   useEffect(() => {
//     init();
//   }, []);

//   const init = async () => {
//     const token = await AsyncStorage.getItem("token");
//     if (!token) return;

//     const payload = JSON.parse(atob(token.split(".")[1]));
//     setMyId(payload.id);

//     loadMessages();
//   };

//   /* ================= LOAD MESSAGES ================= */
//   const loadMessages = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const res = await api.get<Message[]>(`/messages/${chatId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMessages(
//         res.data.sort(
//           (a, b) =>
//             new Date(a.createdAt).getTime() -
//             new Date(b.createdAt).getTime()
//         )
//       );
//     } catch (err) {
//       console.log("Load message error:", err);
//     }
//   };

//   /* ================= POLLING ================= */
//   useEffect(() => {
//     const interval = setInterval(loadMessages, 500);
//     return () => clearInterval(interval);
//   }, []);

//   /* ================= AUTO SCROLL ================= */
//   useEffect(() => {
//     if (messages.length > 0 && isAtBottom) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 50);
//     }
//   }, [messages, isAtBottom]);

//   /* ================= SEND MESSAGE ================= */
//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     try {
//       const token = await AsyncStorage.getItem("token");

//       await api.post(
//         "/messages",
//         {
//           receiverId: chatId,
//           text,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setText("");
//     } catch (err) {
//       console.log("Send message error:", err);
//     }
//   };

//   /* ================= SCROLL DETECTOR ================= */
//   const handleScroll = (
//     event: NativeSyntheticEvent<NativeScrollEvent>
//   ) => {
//     const { layoutMeasurement, contentOffset, contentSize } =
//       event.nativeEvent;

//     const atBottom =
//       layoutMeasurement.height + contentOffset.y >=
//       contentSize.height - 20;

//     setIsAtBottom(atBottom);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       keyboardVerticalOffset={90}
//     >
//       {/* ================= HEADER ================= */}
//       <View style={styles.header}>
//         <View style={styles.avatar}>
//           <Text style={styles.avatarText}>
//             {chatName.charAt(0).toUpperCase()}
//           </Text>
//         </View>
//         <Text style={styles.headerName}>{chatName}</Text>
//       </View>

//       {/* ================= CHAT ================= */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         keyExtractor={(item) => item._id}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}

//         /* 🔥 THIS IS THE KEY FIX 🔥 */
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: "flex-end",
//           padding: 12,
//         }}

//         renderItem={({ item }) => {
//           const isMe = item.senderId === myId;
//           return (
//             <View
//               style={[
//                 styles.bubble,
//                 isMe ? styles.right : styles.left,
//               ]}
//             >
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.time}>
//                 {new Date(item.createdAt).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </Text>
//             </View>
//           );
//         }}
//       />

//       {/* ================= INPUT ================= */}
//       <View style={styles.inputRow}>
//         <TextInput
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//           placeholder="Type a message"
//           placeholderTextColor="#9CA3AF"
//         />
//         <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
//           <Text style={styles.sendText}>➤</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default ChatRoomScreen;

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE5DD",
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 14,
//     backgroundColor: "#075E54",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#25D366",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   avatarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   headerName: {
//     fontSize: 17,
//     fontWeight: "bold",
//     color: "#fff",
//   },

//   bubble: {
//     maxWidth: "75%",
//     padding: 10,
//     borderRadius: 10,
//     marginVertical: 4,
//   },
//   left: {
//     backgroundColor: "#FFFFFF",
//     alignSelf: "flex-start",
//     borderTopLeftRadius: 0,
//   },
//   right: {
//     backgroundColor: "#DCF8C6",
//     alignSelf: "flex-end",
//     borderTopRightRadius: 0,
//   },
//   messageText: {
//     fontSize: 16,
//     color: "#111827",
//   },
//   time: {
//     fontSize: 10,
//     color: "#6B7280",
//     marginTop: 4,
//     textAlign: "right",
//   },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 8,
//   },
//   input: {
//     flex: 1,
//     paddingHorizontal: 14,
//     fontSize: 16,
//   },
//   sendBtn: {
//     backgroundColor: "#25D366",
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   sendText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });





// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "../../utils/api";
// import { useRoute } from "@react-navigation/native";

// type Message = {
//   _id: string;
//   text: string;
//   senderId: string;
//   createdAt: string;
// };

// const ChatRoomScreen = () => {
//   const route = useRoute<any>();
//   const { chatId, chatName } = route.params;

//   const [messages, setMessages] = useState<Message[]>([]);
//   const [text, setText] = useState("");
//   const [myId, setMyId] = useState("");
//   const [isAtBottom, setIsAtBottom] = useState(true);

//   const flatListRef = useRef<FlatList>(null);

//   /* ================= INIT ================= */
//   useEffect(() => {
//     init();
//   }, []);

//   const init = async () => {
//     const token = await AsyncStorage.getItem("token");
//     if (!token) return;

//     const payload = JSON.parse(atob(token.split(".")[1]));
//     setMyId(payload.id);

//     loadMessages();
//   };

//   /* ================= LOAD MESSAGES ================= */
//   const loadMessages = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const res = await api.get<Message[]>(`/messages/${chatId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMessages(
//         res.data.sort(
//           (a, b) =>
//             new Date(a.createdAt).getTime() -
//             new Date(b.createdAt).getTime()
//         )
//       );
//     } catch (err) {
//       console.log("Load message error:", err);
//     }
//   };

//   /* ================= POLLING ================= */
//   useEffect(() => {
//     const interval = setInterval(loadMessages, 500);
//     return () => clearInterval(interval);
//   }, []);

//   /* ================= AUTO SCROLL ================= */
//   useEffect(() => {
//     if (messages.length > 0 && isAtBottom) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 50);
//     }
//   }, [messages, isAtBottom]);

//   /* ================= SEND MESSAGE ================= */
//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     try {
//       const token = await AsyncStorage.getItem("token");

//       await api.post(
//         "/messages",
//         {
//           receiverId: chatId,
//           text,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setText("");
//     } catch (err) {
//       console.log("Send message error:", err);
//     }
//   };

//   /* ================= SCROLL DETECTOR ================= */
//   const handleScroll = (
//     event: NativeSyntheticEvent<NativeScrollEvent>
//   ) => {
//     const { layoutMeasurement, contentOffset, contentSize } =
//       event.nativeEvent;

//     const atBottom =
//       layoutMeasurement.height + contentOffset.y >=
//       contentSize.height - 20;

//     setIsAtBottom(atBottom);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       keyboardVerticalOffset={90}
//     >
//       {/* ================= HEADER ================= */}
//       <View style={styles.header}>
//         <View style={styles.avatar}>
//           <Text style={styles.avatarText}>
//             {chatName.charAt(0).toUpperCase()}
//           </Text>
//         </View>
//         <Text style={styles.headerName}>{chatName}</Text>
//       </View>

//       {/* ================= CHAT ================= */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         keyExtractor={(item) => item._id}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//         keyboardShouldPersistTaps="handled"

//         /* ✅ SHOW SCROLLBAR */
//         showsVerticalScrollIndicator={true}

//         /* ✅ WhatsApp bottom alignment */
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: "flex-end",
//           padding: 12,
//         }}

//         renderItem={({ item }) => {
//           const isMe = item.senderId === myId;
//           return (
//             <View
//               style={[
//                 styles.bubble,
//                 isMe ? styles.right : styles.left,
//               ]}
//             >
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.time}>
//                 {new Date(item.createdAt).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </Text>
//             </View>
//           );
//         }}
//       />

//       {/* ================= INPUT ================= */}
//       <View style={styles.inputRow}>
//         <TextInput
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//           placeholder="Type a message"
//           placeholderTextColor="#9CA3AF"
//         />
//         <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
//           <Text style={styles.sendText}>➤</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default ChatRoomScreen;

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE5DD",
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 14,
//     backgroundColor: "#075E54",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#25D366",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 10,
//   },
//   avatarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   headerName: {
//     fontSize: 17,
//     fontWeight: "bold",
//     color: "#fff",
//   },

//   bubble: {
//     maxWidth: "75%",
//     padding: 10,
//     borderRadius: 10,
//     marginVertical: 4,
//   },
//   left: {
//     backgroundColor: "#FFFFFF",
//     alignSelf: "flex-start",
//     borderTopLeftRadius: 0,
//   },
//   right: {
//     backgroundColor: "#DCF8C6",
//     alignSelf: "flex-end",
//     borderTopRightRadius: 0,
//   },
//   messageText: {
//     fontSize: 16,
//     color: "#111827",
//   },
//   time: {
//     fontSize: 10,
//     color: "#6B7280",
//     marginTop: 4,
//     textAlign: "right",
//   },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 8,
//   },
//   input: {
//     flex: 1,
//     paddingHorizontal: 14,
//     fontSize: 16,
//   },
//   sendBtn: {
//     backgroundColor: "#25D366",
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   sendText: {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });



import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../utils/api";
import { useRoute } from "@react-navigation/native";

type Message = {
  _id: string;
  text: string;
  senderId: string;
  createdAt: string;
};

const ChatRoomScreen = () => {
  const route = useRoute<any>();
  const { chatId, chatName } = route.params;

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [myId, setMyId] = useState("");

  const flatListRef = useRef<FlatList>(null);

  /* ================= INIT ================= */
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    const payload = JSON.parse(atob(token.split(".")[1]));
    setMyId(payload.id);

    loadMessages();
  };

  /* ================= LOAD MESSAGES ================= */
  const loadMessages = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const res = await api.get<Message[]>(`/messages/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 🔥 REVERSE FOR INVERTED LIST
      setMessages(
        res.data
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()
          )
          .reverse()
      );
    } catch (err) {
      console.log("Load message error:", err);
    }
  };

  /* ================= POLLING ================= */
  useEffect(() => {
    const interval = setInterval(loadMessages, 500);
    return () => clearInterval(interval);
  }, []);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const token = await AsyncStorage.getItem("token");

      await api.post(
        "/messages",
        {
          receiverId: chatId,
          text,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setText("");
    } catch (err) {
      console.log("Send message error:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {chatName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.headerName}>{chatName}</Text>
      </View>

      {/* ================= CHAT ================= */}
      <FlatList
        ref={flatListRef}
        data={messages}
        inverted // 🔥 CORE FIX
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => {
          const isMe = item.senderId === myId;
          return (
            <View
              style={[
                styles.bubble,
                isMe ? styles.right : styles.left,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.time}>
                {new Date(item.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </View>
          );
        }}
      />

      {/* ================= INPUT ================= */}
      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#075E54",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },

  bubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
  left: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  right: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#111827",
  },
  time: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 4,
    textAlign: "right",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  sendBtn: {
    backgroundColor: "#25D366",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
 
});

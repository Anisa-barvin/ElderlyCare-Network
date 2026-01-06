

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

//       // 🔥 REVERSE FOR INVERTED LIST
//       setMessages(
//         res.data
//           .sort(
//             (a, b) =>
//               new Date(a.createdAt).getTime() -
//               new Date(b.createdAt).getTime()
//           )
//           .reverse()
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
//         inverted // 🔥 CORE FIX
//         keyExtractor={(item) => item._id}
//         showsVerticalScrollIndicator={true}
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{ padding: 12 }}
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

//   const flatListRef = useRef<FlatList>(null);

//  const handleWheel = (e: any) => {
//   if (Platform.OS !== "web") return;

//   flatListRef.current?.scrollToOffset({
//     offset: e.deltaY,
//     animated: false,
//   });
// };

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

//       // 🔥 REVERSE FOR INVERTED LIST
//       // setMessages(
//       //   res.data
//       //     .sort(
//       //       (a, b) =>
//       //         new Date(a.createdAt).getTime() -
//       //         new Date(b.createdAt).getTime()
//       //     )
//       //     .reverse()
//       // );
//       setMessages(
//   res.data.sort(
//     (a, b) =>
//       new Date(a.createdAt).getTime() -
//       new Date(b.createdAt).getTime()
//   )
// );

//     } catch (err) {
//       console.log("Load message error:", err);
//     }
//   };

//   /* ================= POLLING ================= */
//   useEffect(() => {
//     const interval = setInterval(loadMessages, 500);
//     return () => clearInterval(interval);
//   }, []);

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

//   //Auto Scrool
//   useEffect(() => {
//   if (messages.length > 0) {
//     flatListRef.current?.scrollToEnd({ animated: false });
//   }
// }, [messages]);

// useEffect(() => {
//   if (messages.length > 0) {
//     flatListRef.current?.scrollToOffset({
//       offset: 0,
//       animated: true,
//     });
//   }
// }, [messages]);

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
     

//       {/* <FlatList
//         ref={flatListRef}
//         data={messages}
//         inverted // 🔥 CORE FIX
//         keyExtractor={(item) => item._id}
//         showsVerticalScrollIndicator={true}
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{ padding: 12 }}
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
//       /> */}

//       {/* ================= CHAT ================= */}
// <View
//   style={styles.chatContainer}
//   {...(Platform.OS === "web"
//     ? ({ onWheel: handleWheel } as any)
//     : {})}
// >

//   <FlatList
//   ref={flatListRef}
//   data={messages}
//   keyExtractor={(item) => item._id}
//   keyboardShouldPersistTaps="handled"
//   showsVerticalScrollIndicator
//   contentContainerStyle={{ padding: 12 }}
//   renderItem={({ item }) => {
//     const isMe = item.senderId === myId;
//     return (
//       <View
//         style={[
//           styles.bubble,
//           isMe ? styles.right : styles.left,
//         ]}
//       >
//         <Text style={styles.messageText}>{item.text}</Text>
//         <Text style={styles.time}>
//           {new Date(item.createdAt).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </Text>
//       </View>
//     );
//   }}
// />

// </View>



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
//   chatContainer: {
//   flex: 1,
//   overflow: "hidden", // 🔥 CRITICAL for web scrolling
    
// },

// chatContent: {
//   padding: 12,
//   flexGrow: 1,
// },


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
//     const interval = setInterval(loadMessages, 1000);
//     return () => clearInterval(interval);
//   }, []);

 

//   useEffect(() => {
//   if (messages.length === 0) return;

//   setTimeout(() => {
//     flatListRef.current?.scrollToEnd({ animated: true });
//   }, 50); // 🔥 small delay fixes web + android
// }, [messages]);


//   /* ================= SEND MESSAGE ================= */
//   // const sendMessage = async () => {
//   //   if (!text.trim()) return;

//   //   try {
//   //     const token = await AsyncStorage.getItem("token");

//   //     await api.post(
//   //       "/messages",
//   //       {
//   //         receiverId: chatId,
//   //         text,
//   //       },
//   //       {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       }
//   //     );

//   //     setText("");
//   //   } catch (err) {
//   //     console.log("Send message error:", err);
//   //   }
//   // };
// const sendMessage = async () => {
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

//     setText("");

//     // ✅ Force scroll so input stays visible
//     setTimeout(() => {
//       flatListRef.current?.scrollToEnd({ animated: true });
//     }, 100);
//   } catch (err) {
//     console.log("Send message error:", err);
//   }
// };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
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
//       <View style={styles.chatContainer}>
//         <FlatList
//           ref={flatListRef}
//           data={messages}
//           keyExtractor={(item) => item._id}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator
//           contentContainerStyle={{ padding: 12 }}
//           renderItem={({ item }) => {
//             const isMe = item.senderId === myId;
//             return (
//               <View
//                 style={[
//                   styles.bubble,
//                   isMe ? styles.right : styles.left,
//                 ]}
//               >
//                 <Text style={styles.messageText}>{item.text}</Text>
//                 <Text style={styles.time}>
//                   {new Date(item.createdAt).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </Text>
//               </View>
//             );
//           }}
//         />
//       </View>

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

//   chatContainer: {
//     flex: 1,
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

//   const flatListRef = useRef<FlatList>(null);
//   const shouldAutoScroll = useRef(true);

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
//     const interval = setInterval(loadMessages, 1000);
//     return () => clearInterval(interval);
//   }, []);

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
//       shouldAutoScroll.current = true;
//     } catch (err) {
//       console.log("Send message error:", err);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       keyboardVerticalOffset={90}
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

//       {/* CHAT */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         keyExtractor={(item) => item._id}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator
//         contentContainerStyle={{ padding: 12 }}
//         onContentSizeChange={() => {
//           if (shouldAutoScroll.current) {
//             flatListRef.current?.scrollToEnd({ animated: true });
//           }
//         }}
//         onScrollBeginDrag={() => {
//           shouldAutoScroll.current = false;
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

//       {/* INPUT */}
//       <View style={styles.inputRow}>
//         <TextInput
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//           placeholder="Type a message"
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
//   container: { flex: 1, backgroundColor: "#ECE5DD" },

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

//   avatarText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   headerName: { fontSize: 17, fontWeight: "bold", color: "#fff" },

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

//   messageText: { fontSize: 16 },
//   time: { fontSize: 10, color: "#6B7280", textAlign: "right" },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 8,
//   },

//   input: { flex: 1, fontSize: 16 },
//   sendBtn: {
//     backgroundColor: "#25D366",
//     padding: 10,
//     borderRadius: 20,
//   },
//   sendText: { color: "#fff", fontSize: 16 },
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

//   const flatListRef = useRef<FlatList>(null);
//   const autoScrollRef = useRef(true);

//   /* ================= INIT ================= */
//   useEffect(() => {
//     (async () => {
//       const token = await AsyncStorage.getItem("token");
//       if (!token) return;

//       const payload = JSON.parse(atob(token.split(".")[1]));
//       setMyId(payload.id);
//       loadMessages();
//     })();
//   }, []);

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
//     const interval = setInterval(loadMessages, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   /* ================= AUTO SCROLL ================= */
//   const handleContentChange = () => {
//     if (autoScrollRef.current) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 50);
//     }
//   };

//   /* ================= SEND MESSAGE ================= */
//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     try {
//       const token = await AsyncStorage.getItem("token");

//       await api.post(
//         "/messages",
//         { receiverId: chatId, text },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setText("");
//       autoScrollRef.current = true;
//     } catch (err) {
//       console.log("Send message error:", err);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       keyboardVerticalOffset={90}
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

//       {/* CHAT */}
//       {/* <FlatList
//         ref={flatListRef}
//         data={messages}
//         keyExtractor={(item) => item._id}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator
//         contentContainerStyle={{ padding: 12 }}
//         onContentSizeChange={handleContentChange}
//         onScrollBeginDrag={() => {
//           autoScrollRef.current = false;
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
//       /> */}
// <FlatList
//   ref={flatListRef}
//   data={messages}
//   keyExtractor={(item) => item._id}
//   keyboardShouldPersistTaps="handled"
//   showsVerticalScrollIndicator
//   contentContainerStyle={{ padding: 12 }}

//   // 🔥 Detect scroll position
//   onScroll={(event) => {
//     const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

//     const isNearBottom =
//       layoutMeasurement.height + contentOffset.y >=
//       contentSize.height - 20;

//     autoScrollRef.current = isNearBottom;
//   }}

//   onContentSizeChange={() => {
//     if (autoScrollRef.current) {
//       flatListRef.current?.scrollToEnd({ animated: true });
//     }
//   }}

//   renderItem={({ item }) => {
//     const isMe = item.senderId === myId;
//     return (
//       <View
//         style={[
//           styles.bubble,
//           isMe ? styles.right : styles.left,
//         ]}
//       >
//         <Text style={styles.messageText}>{item.text}</Text>
//         <Text style={styles.time}>
//           {new Date(item.createdAt).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </Text>
//       </View>
//     );
//   }}
// />

//       {/* INPUT */}
//       <View style={styles.inputRow}>
//         <TextInput
//           value={text}
//           onChangeText={setText}
//           style={styles.input}
//           placeholder="Type a message"
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
//   container: { flex: 1, backgroundColor: "#ECE5DD" },

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

//   avatarText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   headerName: { fontSize: 17, fontWeight: "bold", color: "#fff" },

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

//   messageText: { fontSize: 16 },
//   time: { fontSize: 10, color: "#6B7280", textAlign: "right" },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 8,
//   },

//   input: { flex: 1, fontSize: 16 },
//   sendBtn: {
//     backgroundColor: "#25D366",
//     padding: 10,
//     borderRadius: 20,
//   },
//   sendText: { color: "#fff", fontSize: 16 },
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
  const autoScrollRef = useRef(true);

  /* ================= INIT ================= */
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const payload = JSON.parse(atob(token.split(".")[1]));
      setMyId(payload.id);
      loadMessages();
      handleContentChange();
    })();
  }, []);

  /* ================= LOAD MESSAGES ================= */
  const loadMessages = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const res = await api.get<Message[]>(`/messages/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessages(
        res.data.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        )
      );
      
    } catch (err) {
      console.log("Load message error:", err);
    }
  };

  /* ================= POLLING ================= */
  useEffect(() => {
    const interval = setInterval(loadMessages, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ================= AUTO SCROLL ================= */
  const handleContentChange = () => {
    if (autoScrollRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 5);
    }
  };

  /* ================= SEND MESSAGE ================= */
  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const token = await AsyncStorage.getItem("token");

      await api.post(
        "/messages",
        { receiverId: chatId, text },
        { headers: { Authorization: `Bearer ${token}` } }
        
      );
      handleContentChange();

      setText("");
      autoScrollRef.current = true;
    } catch (err) {
      console.log("Send message error:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {chatName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.headerName}>{chatName}</Text>
      </View>

      {/* CHAT */}
     
<FlatList
  ref={flatListRef}
  data={messages}
  keyExtractor={(item) => item._id}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator
  contentContainerStyle={{ padding: 12 }}

  // 🔥 Detect scroll position
  onScroll={(event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isNearBottom =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - 20;

    autoScrollRef.current = isNearBottom;
  }}

  onContentSizeChange={() => {
    if (autoScrollRef.current) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }}

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

      {/* INPUT */}
          {/* ===== INPUT (FIXED) ===== */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ECE5DD" },

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

  avatarText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  headerName: { fontSize: 17, fontWeight: "bold", color: "#fff" },

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

  messageText: { fontSize: 16 },
  time: { fontSize: 10, color: "#6B7280", textAlign: "right" },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 8,
  },

  input: { flex: 1, fontSize: 16 },
  sendBtn: {
    backgroundColor: "#25D366",
    padding: 10,
    borderRadius: 20,
  },
  sendText: { color: "#fff", fontSize: 16 },
});








// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE5DD",
//   },

//   header: {
//     height: 60,
//     backgroundColor: "#075E54",
//     justifyContent: "center",
//     paddingHorizontal: 16,
//   },

//   headerName: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },

//   chatList: {
//     flex: 1, // 🔥 THIS MAKES ONLY CHAT SCROLL
//   },

//   bubble: {
//     maxWidth: "75%",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 8,
//   },

//   myBubble: {
//     backgroundColor: "#DCF8C6",
//     alignSelf: "flex-end",
//   },

//   otherBubble: {
//     backgroundColor: "#FFFFFF",
//     alignSelf: "flex-start",
//   },

//   messageText: {
//     fontSize: 16,
//   },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 8,
//     backgroundColor: "#fff",
//   },

//   input: {
//     flex: 1,
//     fontSize: 16,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 20,
//   },

//   sendBtn: {
//     marginLeft: 8,
//     backgroundColor: "#25D366",
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },

//   sendText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

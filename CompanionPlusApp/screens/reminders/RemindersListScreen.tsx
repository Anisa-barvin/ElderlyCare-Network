// // Path: CompanionPlusApp/screens/reminders/RemindersListScreen.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// type Reminder = {
//   id: string;
//   time: string;
//   message: string;
// };

// const RemindersListScreen = () => {
//   const navigation = useNavigation();
//   const [reminders, setReminders] = useState<Reminder[]>([
//     { id: '1', time: '08:00 AM', message: 'Take morning medicine' },
//     { id: '2', time: '12:00 PM', message: 'Eat lunch' },
//     { id: '3', time: '06:00 PM', message: 'Evening walk' },
//   ]);

//   const renderReminder = ({ item }: { item: Reminder }) => (
//     <View style={styles.reminderCard}>
//       <Text style={styles.reminderTime}>{item.time}</Text>
//       <Text style={styles.reminderMessage}>{item.message}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Your Reminders</Text>
//       <FlatList
//         data={reminders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderReminder}
//         contentContainerStyle={styles.listContent}
//       />
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('AddReminderScreen' as never)}
//       >
//         <Text style={styles.addButtonText}>+ Add Reminder</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F6F8',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//   },
//   listContent: {
//     paddingBottom: 100,
//   },
//   reminderCard: {
//     backgroundColor: '#FFF',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 2,
//   },
//   reminderTime: {
//     fontSize: 18,
//     color: '#4CAF50',
//     fontWeight: '600',
//   },
//   reminderMessage: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 4,
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 30,
//     right: 20,
//     backgroundColor: '#4CAF50',
//     borderRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     elevation: 3,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default RemindersListScreen;


// Path: CompanionPlusApp/screens/reminders/RemindersListScreen.tsx
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  RefreshControl,
  Platform,
  LayoutAnimation,
  UIManager,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Reminder = {
  id: string;
  time: string;
  message: string;
  completed?: boolean;
};

const initialReminders: Reminder[] = [
  { id: '1', time: '08:00 AM', message: 'Take morning medicine', completed: false },
  { id: '2', time: '12:00 PM', message: 'Eat lunch', completed: false },
  { id: '3', time: '06:00 PM', message: 'Evening walk', completed: false },
];

const RemindersListScreen = () => {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState<Reminder[]>(initialReminders);
  const [refreshing, setRefreshing] = useState(false);

  // modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);

  // form fields
  const [formTime, setFormTime] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // simulate fetch / refresh
    setTimeout(() => {
      setRefreshing(false);
      // optionally, you can re-fetch from server here
    }, 800);
  }, []);

  const openAddModal = () => {
    setEditingReminder(null);
    setFormTime('');
    setFormMessage('');
    setModalVisible(true);
  };

  const openEditModal = (item: Reminder) => {
    setEditingReminder(item);
    setFormTime(item.time);
    setFormMessage(item.message);
    setModalVisible(true);
  };

  const saveReminder = () => {
    if (!formTime.trim() || !formMessage.trim()) {
      Alert.alert('Validation', 'Please enter both time and message.');
      return;
    }

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (editingReminder) {
      // update existing
      setReminders(prev =>
        prev.map(r => (r.id === editingReminder.id ? { ...r, time: formTime, message: formMessage } : r))
      );
    } else {
      // add new
      const newReminder: Reminder = {
        id: Date.now().toString(),
        time: formTime,
        message: formMessage,
        completed: false,
      };
      setReminders(prev => [newReminder, ...prev]);
    }

    setModalVisible(false);
  };

  const confirmDelete = (id: string) => {
    Alert.alert('Delete reminder', 'Are you sure you want to delete this reminder?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setReminders(prev => prev.filter(r => r.id !== id));
        },
      },
    ]);
  };

  const toggleComplete = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setReminders(prev => prev.map(r => (r.id === id ? { ...r, completed: !r.completed } : r)));
  };

  const renderReminder = ({ item }: { item: Reminder }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => toggleComplete(item.id)}
        style={[
          styles.reminderCard,
          item.completed && styles.reminderCardCompleted,
        ]}
      >
        <View style={styles.reminderLeft}>
          <Text style={[styles.reminderTime, item.completed && styles.completedText]}>{item.time}</Text>
          <Text style={[styles.reminderMessage, item.completed && styles.completedText]}>
            {item.message}
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => openEditModal(item)}
          >
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.deleteButton]}
            onPress={() => confirmDelete(item.id)}
          >
            <Text style={[styles.actionText, styles.deleteText]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const emptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No reminders yet</Text>
      <Text style={styles.emptyText}>Tap the button below to add a new reminder.</Text>
      <TouchableOpacity style={styles.bigAddButton} onPress={openAddModal}>
        <Text style={styles.bigAddText}>+ Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Your Reminders</Text>

        <TouchableOpacity style={styles.headerAdd} onPress={openAddModal}>
          <Text style={styles.headerAddText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reminders}
        keyExtractor={item => item.id}
        renderItem={renderReminder}
        contentContainerStyle={[styles.listContent, reminders.length === 0 && styles.listEmpty]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={emptyComponent}
      />

      {/* Floating add button */}
      {reminders.length > 0 && (
        <TouchableOpacity style={styles.addButton} onPress={openAddModal}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      )}

      {/* Add / Edit Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{editingReminder ? 'Edit Reminder' : 'Add Reminder'}</Text>

            <Text style={styles.inputLabel}>Time (e.g. 08:00 AM)</Text>
            <TextInput
              style={styles.input}
              placeholder="08:00 AM"
              value={formTime}
              onChangeText={setFormTime}
              keyboardType="default"
            />

            <Text style={[styles.inputLabel, { marginTop: 12 }]}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter reminder message"
              value={formMessage}
              onChangeText={setFormMessage}
              multiline
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalCancel} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalSave} onPress={saveReminder}>
                <Text style={styles.modalSaveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RemindersListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  headerRow: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  headerAdd: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  headerAddText: {
    color: '#fff',
    fontWeight: '700',
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    paddingTop: 6,
  },
  listEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  reminderCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  reminderCardCompleted: {
    backgroundColor: '#F3F7F3',
  },
  reminderLeft: {
    flex: 1,
    paddingRight: 12,
  },
  reminderTime: {
    fontSize: 18,
    color: '#0F766E',
    fontWeight: '700',
  },
  reminderMessage: {
    fontSize: 15,
    color: '#374151',
    marginTop: 6,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 8,
    backgroundColor: '#E6F4EA',
  },
  actionText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 13,
  },
  deleteButton: {
    backgroundColor: '#FFF1F2',
  },
  deleteText: {
    color: '#B91C1C',
  },

  addButton: {
    position: 'absolute',
    bottom: 28,
    right: 18,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 12,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  emptyText: {
    color: '#6B7280',
    marginBottom: 18,
  },
  bigAddButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  bigAddText: {
    color: '#fff',
    fontWeight: '700',
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 10 : 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  modalButtons: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalCancel: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  modalCancelText: {
    color: '#374151',
    fontWeight: '600',
  },
  modalSave: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
  },
  modalSaveText: {
    color: '#fff',
    fontWeight: '700',
  },
});

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const AddReminderScreen = ({ navigation }: any) => {
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [description, setDescription] = useState('');

//   // Handle form submission
//   const handleAddReminder = () => {
//     if (!title || !date || !time || !description) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     // Mock API call or data save operation
//     Alert.alert('Success', 'Reminder added successfully!');

//     // Navigate back to the reminders list screen
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Add New Reminder</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Date (YYYY-MM-DD)"
//         value={date}
//         onChangeText={setDate}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Time (HH:MM AM/PM)"
//         value={time}
//         onChangeText={setTime}
//       />
//       <TextInput
//         style={[styles.input, styles.descriptionInput]}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
//         <Text style={styles.addButtonText}>Add Reminder</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.cancelButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.cancelButtonText}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AddReminderScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#1F2937',
//   },
//   input: {
//     height: 45,
//     borderColor: '#D1D5DB',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   descriptionInput: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   addButton: {
//     padding: 15,
//     backgroundColor: '#34D399',
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     padding: 15,
//     backgroundColor: '#E5E7EB',
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   cancelButtonText: {
//     color: '#1F2937',
//     fontWeight: 'bold',
//   },
// });


// Path: CompanionPlusApp/screens/reminders/AddReminderScreen.tsx
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type RepeatOption = 'None' | 'Daily' | 'Weekly' | 'Monthly';
type Priority = 'Low' | 'Medium' | 'High';

const AddReminderScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // store date/time as Date object
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [priority, setPriority] = useState<Priority>('Medium');
  const [repeat, setRepeat] = useState<RepeatOption>('None');

  // Validation derived state
  const isValid = useMemo(() => {
    return title.trim().length > 0 && description.trim().length > 0 && dateTime !== null;
  }, [title, description, dateTime]);

  // Format helpers
  const formatDate = (d: Date | null) =>
    d ? d.toLocaleDateString() : 'Select date';
  const formatTime = (d: Date | null) =>
    d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Select time';

  // Open platform-specific picker or fallback on web
  const openDatePicker = () => {
    if (Platform.OS === 'web') {
      // simple fallback prompt for web
      const input = prompt('Enter date (YYYY-MM-DD)', dateTime ? dateTime.toISOString().slice(0, 10) : '');
      if (input) {
        const parsed = new Date(input + 'T00:00:00');
        if (!isNaN(parsed.getTime())) {
          // preserve existing time
          const newDt = dateTime ? new Date(parsed.setHours(dateTime.getHours(), dateTime.getMinutes())) : parsed;
          setDateTime(newDt);
        } else {
          Alert.alert('Invalid date', 'Please use YYYY-MM-DD format');
        }
      }
      return;
    }
    setShowDatePicker(true);
  };

  const openTimePicker = () => {
    if (Platform.OS === 'web') {
      const input = prompt('Enter time (HH:MM, 24-hour)', dateTime ? `${pad(dateTime.getHours())}:${pad(dateTime.getMinutes())}` : '');
      if (input) {
        const [hh, mm] = input.split(':').map((x) => parseInt(x, 10));
        if (!isNaN(hh) && !isNaN(mm)) {
          const now = dateTime ? new Date(dateTime) : new Date();
          now.setHours(hh, mm, 0, 0);
          setDateTime(now);
        } else {
          Alert.alert('Invalid time', 'Please use HH:MM format (24-hour).');
        }
      }
      return;
    }
    setShowTimePicker(true);
  };

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  // DateTime change handlers for native pickers
  const onChangeDate = (event: any, selected?: Date) => {
    setShowDatePicker(false);
    if (selected) {
      const current = dateTime ?? new Date();
      current.setFullYear(selected.getFullYear(), selected.getMonth(), selected.getDate());
      setDateTime(new Date(current));
    }
  };

  const onChangeTime = (event: any, selected?: Date) => {
    setShowTimePicker(false);
    if (selected) {
      const current = dateTime ?? new Date();
      current.setHours(selected.getHours(), selected.getMinutes(), 0, 0);
      setDateTime(new Date(current));
    }
  };

  // Reset form
  const clearForm = () => {
    setTitle('');
    setDescription('');
    setDateTime(null);
    setPriority('Medium');
    setRepeat('None');
  };

  // Save action (mock)
  const handleAddReminder = () => {
    if (!isValid) {
      Alert.alert('Incomplete', 'Please provide title, description and date/time.');
      return;
    }

    // Mock save -> in real app call API or local DB
    const payload = {
      title: title.trim(),
      description: description.trim(),
      datetime: dateTime?.toISOString(),
      priority,
      repeat,
    };

    console.log('Saving reminder:', payload);
    Alert.alert('Success', 'Reminder added successfully!');
    clearForm();
    navigation.goBack();
  };

  // Small preview card rendered live
  const PreviewCard = () => (
    <View style={styles.previewCard}>
      <Text style={styles.previewTitle}>{title || 'Reminder title'}</Text>
      <Text style={styles.previewMeta}>
        {dateTime ? `${formatDate(dateTime)} • ${formatTime(dateTime)}` : 'No date/time chosen'}
      </Text>
      <Text style={styles.previewDesc}>{description || 'Description will show here...'}</Text>

      <View style={styles.previewFooter}>
        <View style={[styles.badge, priorityColor(priority)]}>
          <Text style={styles.badgeText}>{priority}</Text>
        </View>
        <Text style={styles.repeatText}>{repeat !== 'None' ? `Repeats: ${repeat}` : ''}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Reminder</Text>

      <View style={styles.formRow}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Enter reminder title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Describe the reminder"
          style={[styles.input, styles.textArea]}
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity style={styles.pickerBtn} onPress={openDatePicker}>
            <Text style={styles.pickerBtnText}>{formatDate(dateTime)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.half}>
          <Text style={styles.label}>Time</Text>
          <TouchableOpacity style={styles.pickerBtn} onPress={openTimePicker}>
            <Text style={styles.pickerBtnText}>{formatTime(dateTime)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Priority and Repeat selectors */}
      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.label}>Priority</Text>
          <View style={styles.selectorRow}>
            {(['Low', 'Medium', 'High'] as Priority[]).map((p) => (
              <TouchableOpacity
                key={p}
                style={[styles.selector, priority === p && styles.selectorActive]}
                onPress={() => setPriority(p)}
              >
                <Text style={[styles.selectorText, priority === p && styles.selectorTextActive]}>{p}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.half}>
          <Text style={styles.label}>Repeat</Text>
          <View style={styles.selectorRow}>
            {(['None', 'Daily', 'Weekly', 'Monthly'] as RepeatOption[]).map((r) => (
              <TouchableOpacity
                key={r}
                style={[styles.selector, repeat === r && styles.selectorActive]}
                onPress={() => setRepeat(r)}
              >
                <Text style={[styles.selectorText, repeat === r && styles.selectorTextActive]}>{r}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Live preview */}
      <Text style={[styles.label, { marginTop: 18 }]}>Preview</Text>
      <PreviewCard />

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.clearBtn} onPress={clearForm}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.addButton, !isValid && styles.addButtonDisabled]}
          onPress={handleAddReminder}
          disabled={!isValid}
        >
          <Text style={styles.addButtonText}>Add Reminder</Text>
        </TouchableOpacity>
      </View>

      {/* Native pickers (rendered only when visible) */}
      {showDatePicker && Platform.OS !== 'web' && (
        <DateTimePicker
          value={dateTime ?? new Date()}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      {showTimePicker && Platform.OS !== 'web' && (
        <DateTimePicker
          value={dateTime ?? new Date()}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}
    </ScrollView>
  );
};

export default AddReminderScreen;

/* ---------- helper styles & functions ---------- */

const priorityColor = (p: Priority) => {
  switch (p) {
    case 'Low':
      return { backgroundColor: '#D1FAE5' as any, borderColor: '#A7F3D0' };
    case 'Medium':
      return { backgroundColor: '#FEF3C7' as any, borderColor: '#FDE68A' };
    case 'High':
      return { backgroundColor: '#FEE2E2' as any, borderColor: '#FCA5A5' };
    default:
      return { backgroundColor: '#E5E7EB' as any, borderColor: '#D1D5DB' };
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8FAFC',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 14,
  },

  formRow: {
    marginBottom: 12,
  },

  label: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E6E9EE',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },

  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
    paddingTop: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  half: {
    flex: 1,
  },

  pickerBtn: {
    borderWidth: 1,
    borderColor: '#E6E9EE',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  pickerBtnText: {
    color: '#0F172A',
    fontSize: 15,
  },

  selectorRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },

  selector: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E9EE',
    backgroundColor: '#FFF',
  },

  selectorActive: {
    borderColor: '#111827',
    backgroundColor: '#111827',
  },

  selectorText: {
    color: '#111827',
    fontSize: 13,
  },

  selectorTextActive: {
    color: '#fff',
  },

  previewCard: {
    marginTop: 8,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEF2FF',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },

  previewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  previewMeta: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
  },

  previewDesc: {
    marginTop: 10,
    color: '#334155',
  },

  previewFooter: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#0F172A',
  },

  repeatText: {
    color: '#64748B',
    fontSize: 13,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18,
    gap: 10,
  },

  clearBtn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E9EE',
    marginRight: 8,
  },

  clearText: {
    color: '#111827',
    fontWeight: '600',
  },

  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#10B981',
    borderRadius: 10,
  },

  addButtonDisabled: {
    backgroundColor: '#6EE7B7',
    opacity: 0.6,
  },

  addButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

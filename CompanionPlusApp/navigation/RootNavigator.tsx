


// // Path: CompanionPlusApp/navigation/RootNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

/* ================= IMPORT SCREENS ================= */

// Auth & Common
import AuthLoadingScreen from '../screens/common/AuthLoadingScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import LoginAsElderScreen from '../screens/auth/LoginAsElderScreen';
import RegisterAsElderScreen from '../screens/auth/RegisterAsElderScreen';
import CaregiverLoginScreen from '../screens/auth/CaregiverLoginScreen';
import CaregiverRegisterScreen from '../screens/auth/CaregiverRegisterScreen';

// Home
import ElderHomeScreen from '../screens/home/ElderHomeScreen';
import CaregiverHomeScreen from '../screens/caregiver/CaregiverHomeScreen';

// Profile
import ElderProfileScreen from '../screens/profile/ElderProfileScreen';
import RelationProfileScreen from '../screens/profile/RelationProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import EditRelationProfileScreen from '../screens/profile/EditRelationProfileScreen';
import CaregiverProfileScreen from '../screens/caregiver/CaregiverProfileScreen';

// Caregiver
import SearchCaregiversScreen from '../screens/caregiver/SearchCaregiversScreen';
import CaregiverDetailsScreen from '../screens/caregiver/CaregiverDetailsScreen';
import RequestCaregiverScreen from '../screens/caregiver/RequestCaregiverScreen';
import CaregiverNotificationsScreen from '../screens/caregiver/CaregiverNotificationsScreen';

// Health
import HealthDashboardScreen from '../screens/health/HealthDashboardScreen';
import AddHealthRecordScreen from '../screens/health/AddHealthRecordScreen';
import ViewHealthHistoryScreen from '../screens/health/ViewHealthHistoryScreen';

// Calendar & Events
import CalendarScreen from '../screens/calendar/CalendarScreen';
import AddEventScreen from '../screens/calendar/AddEventScreen';

// Chat
import ChatListScreen from '../screens/chat/ChatListScreen';
import ChatRoomScreen from '../screens/chat/ChatRoomScreen';

// Others
import HelpScreen from '../screens/common/HelpScreen';
import SettingsScreen from '../screens/common/SettingsScreen';
import ElderNotificationsScreen from '../screens/notifications/ElderNotificationsScreen';
import ChangePasswordScreen from '../screens/settings/ChangePasswordScreen';

// Doctor
import DoctorListScreen from '../screens/doctor/DoctorListScreen';
import BookConsultationScreen from '../screens/doctor/BookConsultationScreen';
import MyAppointmentsScreen from '../screens/doctor/MyAppointmentsScreen';

// Family
import LinkedEldersScreen from '../screens/family/LinkedEldersScreen';
import RelationDashboardScreen from '../screens/family/RelationDashboardScreen';

// Reminders
import AddReminderScreen from '../screens/reminders/AddReminderScreen';
import RemindersListScreen from '../screens/reminders/RemindersListScreen';

// Transport
import BookingHistoryScreen from '../screens/transport/BookingHistoryScreen';
import TransportRequestScreen from '../screens/transport/TransportRequestScreen';

// Wellness
import ResourceDetailsScreen from '../screens/wellness/ResourceDetailsScreen';
import WellnessResourcesScreen from '../screens/wellness/WellnessResourcesScreen';

// Emergency
import SOSButtonScreen from '../screens/emergency/SOSButtonScreen';

//AI chat
import AIChatScreen from '../screens/chat/AIChatScreen';
import VoiceChatScreen from '../screens/chat/VoiceChatScreen';
import EditCaregiverProfileScreen from '../screens/caregiver/EditCaregiverProfileScreen';
import CaregiverSettingsScreen from '../screens/caregiver/CaregiverSettingsScreen';
import CaregiverChangePasswordScreen from '../screens/settings/CaregiverChangePasswordScreen';
import CaregiverHelpScreen from '../screens/common/CaregiverHelpScreen';
import VerifyOtpScreen from '../screens/auth/VerifyOtpScreen';
/* ================= TYPES ================= */

export type RootStackParamList = {
  AuthLoading: undefined;
  Splash: undefined;
  RoleSelection: undefined;

  LoginAsElder: undefined;
  RegisterAsElder: undefined;

  CaregiverLogin: undefined;
  CaregiverRegister: undefined;

  ElderHome: undefined;
  CaregiverHome: undefined;

  ElderProfile: undefined;
  RelationProfile: undefined;
  EditProfile: undefined;
  EditRelationProfileScreen: undefined;
  CaregiverProfile: undefined;

  SearchCaregivers: undefined;
  CaregiverDetails: { caregiverId: string };
  RequestCaregiver: { caregiverId: string; caregiverName: string };

  HealthDashboard: undefined;
  AddHealthRecordScreen: undefined;
  ViewHealthHistoryScreen: undefined;

  CalendarScreen: undefined;
  AddEventScreen: undefined;

  ChatListScreen: undefined;
  ChatRoomScreen: { chatId: string; chatName: string };

  HelpScreen: undefined;
  SettingsScreen: undefined;
  ChangePassword: undefined;

  DoctorListScreen: undefined;
  BookConsultationScreen: { doctorId: string };
  MyAppointmentsScreen: undefined;

  LinkedEldersScreen: undefined;
  RelationDashboardScreen: undefined;

  AddReminderScreen: undefined;
  RemindersListScreen: undefined;

  BookingHistoryScreen: undefined;
  TransportRequestScreen: undefined;

  ResourceDetailsScreen: undefined;
  WellnessResourcesScreen: undefined;

  CaregiverNotifications: undefined;
  ElderNotifications: undefined;

  SOSButton: undefined;

  AIChat: undefined;
  VoiceChat:undefined;
  EditCaregiverProfile:undefined;
  CaregiverSettings :  undefined;
  CaregiverChangePassword : undefined;
  CaregiverHelp : undefined;
  VerifyOtp : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/* ================= ROOT NAVIGATOR ================= */

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={({ navigation }) => ({
      headerShown: true,

      // ✅ FULL HEADER BACKGROUND COLOR
      headerStyle: {
        backgroundColor: '#b1c9e1ff',
      },

      headerTitle: '', // remove screen title

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111827' }}>
            ⬅️ Back
          </Text>
        </TouchableOpacity>
      ),
    })}
  >
        {/* ===== AUTH FLOW ===== */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
          options={{ headerShown: false }}
        />
        {/* AUTH FLOW */}
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} options={{ headerShown: false }} /> */}

        <Stack.Screen name="LoginAsElder" component={LoginAsElderScreen} />
        <Stack.Screen name="RegisterAsElder" component={RegisterAsElderScreen} />
        <Stack.Screen name="CaregiverLogin" component={CaregiverLoginScreen} />
        <Stack.Screen name="CaregiverRegister" component={CaregiverRegisterScreen} />

        {/* HOME */}
        <Stack.Screen name="ElderHome" component={ElderHomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CaregiverHome" component={CaregiverHomeScreen} options={{ headerShown: false }}/>

        {/* ALL OTHER SCREENS */}
        <Stack.Screen name="ElderProfile" component={ElderProfileScreen} />
        <Stack.Screen name="RelationProfile" component={RelationProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="EditRelationProfileScreen" component={EditRelationProfileScreen} />
        <Stack.Screen name="CaregiverProfile" component={CaregiverProfileScreen} />

        <Stack.Screen name="SearchCaregivers" component={SearchCaregiversScreen} />
        <Stack.Screen name="CaregiverDetails" component={CaregiverDetailsScreen} />
        <Stack.Screen name="RequestCaregiver" component={RequestCaregiverScreen} />

        <Stack.Screen name="HealthDashboard" component={HealthDashboardScreen} />
        <Stack.Screen name="AddHealthRecordScreen" component={AddHealthRecordScreen} />
        <Stack.Screen name="ViewHealthHistoryScreen" component={ViewHealthHistoryScreen} />

        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="AddEventScreen" component={AddEventScreen} />

        <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
        <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />

        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />

        <Stack.Screen name="DoctorListScreen" component={DoctorListScreen} />
        <Stack.Screen name="BookConsultationScreen" component={BookConsultationScreen} />
        <Stack.Screen name="MyAppointmentsScreen" component={MyAppointmentsScreen} />

        <Stack.Screen name="LinkedEldersScreen" component={LinkedEldersScreen} />
        <Stack.Screen name="RelationDashboardScreen" component={RelationDashboardScreen} />

        <Stack.Screen name="AddReminderScreen" component={AddReminderScreen} />
        <Stack.Screen name="RemindersListScreen" component={RemindersListScreen} />

        <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
        <Stack.Screen name="TransportRequestScreen" component={TransportRequestScreen} />

        <Stack.Screen name="ResourceDetailsScreen" component={ResourceDetailsScreen} />
        <Stack.Screen name="WellnessResourcesScreen" component={WellnessResourcesScreen} />

        <Stack.Screen name="CaregiverNotifications" component={CaregiverNotificationsScreen} />
        <Stack.Screen name="ElderNotifications" component={ElderNotificationsScreen} />

        <Stack.Screen name="SOSButton" component={SOSButtonScreen} />
        <Stack.Screen name="AIChat" component={AIChatScreen} />
        
         <Stack.Screen name="VoiceChat" component={VoiceChatScreen} />

          <Stack.Screen
  name="EditCaregiverProfile"
  component={EditCaregiverProfileScreen}
  options={{ title: 'Edit Profile' }}
/>

 <Stack.Screen name="CaregiverSettings" component={CaregiverSettingsScreen} />
 <Stack.Screen name="CaregiverChangePassword" component={CaregiverChangePasswordScreen} />
 <Stack.Screen
  name="CaregiverHelp"
  component={CaregiverHelpScreen}
/>
<Stack.Screen
  name="VerifyOtp"
  component={VerifyOtpScreen}
  options={{ title: "Verify OTP" }}
/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;








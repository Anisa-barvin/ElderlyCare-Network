export type StackParamList = {
  Splash: undefined;
  LoginAsElder: undefined;
  LoginAsRelation: undefined;
  RegisterAsElder: undefined;
  RegisterAsRelation: undefined;
  Home: undefined;
  ElderProfile: undefined;

  // New screens
  DoctorListScreen: undefined;
  DoctorDetailsScreen: { doctorId: string };
  BookConsultationScreen: { doctorId: string };

  // ✅ Add these:
  LinkedEldersScreen: undefined;
  ElderProfileScreen: { elderId: string };
};

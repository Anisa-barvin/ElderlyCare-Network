import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Sidebar + Content
    backgroundColor: '#F9FAFB',
  },
  sidebar: {
    width: 220,
    backgroundColor: '#1F2937',
    padding: 15,
  },
  sidebarHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  sidebarButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#374151',
    borderRadius: 8,
    marginBottom: 12,
  },
  sidebarButtonText: {
    fontSize: 16,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111827',
  },
  subtitle: {
    fontSize: 18,
    color: '#4B5563',
    textAlign: 'center',
  },
});

export default styles;

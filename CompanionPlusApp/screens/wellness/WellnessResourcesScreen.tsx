import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const WellnessResourcesScreen = ({ navigation }: any) => {
  // Static list of wellness resources
  const resources = [
    {
      id: 1,
      title: 'Yoga for Beginners',
      description: 'Learn the basics of yoga with easy-to-follow instructions.',
    },
    {
      id: 2,
      title: 'Meditation Guide',
      description: 'A step-by-step guide to start your meditation practice.',
    },
    {
      id: 3,
      title: 'Healthy Eating Tips',
      description: 'Simple tips to improve your diet and live healthier.',
    },
    {
      id: 4,
      title: 'Stress Management Techniques',
      description: 'Learn techniques to manage and reduce stress effectively.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Wellness Resources</Text>
        {resources.map((resource) => (
          <TouchableOpacity
            key={resource.id}
            style={styles.resourceItem}
            onPress={() => navigation.navigate('ResourceDetails', { resourceId: resource.id })}
          >
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.resourceDescription}>{resource.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  resourceItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
  },
  resourceContent: {
    marginBottom: 10,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default WellnessResourcesScreen;

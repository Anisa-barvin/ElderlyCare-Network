import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';

const ResourceDetailsScreen = () => {
  // Static resource data for demonstration
  const resource = {
    title: "Wellness Yoga Guide",
    category: "Wellness",
    description: "A comprehensive guide to Yoga practices for mental and physical wellness.",
    content: "In this guide, we cover a variety of yoga poses, breathing techniques, and mindfulness exercises."
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{resource.title}</Text>
        <Text style={styles.category}>Category: {resource.category}</Text>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{resource.description}</Text>
        <Text style={styles.sectionTitle}>Content</Text>
        <Text style={styles.content}>{resource.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  scroll: {
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  category: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  content: {
    fontSize: 16,
  }
});

export default ResourceDetailsScreen;

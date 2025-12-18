// import React from 'react';
// import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';

// const ResourceDetailsScreen = () => {
//   // Static resource data for demonstration
//   const resource = {
//     title: "Wellness Yoga Guide",
//     category: "Wellness",
//     description: "A comprehensive guide to Yoga practices for mental and physical wellness.",
//     content: "In this guide, we cover a variety of yoga poses, breathing techniques, and mindfulness exercises."
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scroll}>
//         <Text style={styles.title}>{resource.title}</Text>
//         <Text style={styles.category}>Category: {resource.category}</Text>
//         <Text style={styles.sectionTitle}>Description</Text>
//         <Text style={styles.description}>{resource.description}</Text>
//         <Text style={styles.sectionTitle}>Content</Text>
//         <Text style={styles.content}>{resource.content}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20
//   },
//   scroll: {
//     paddingBottom: 20
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   category: {
//     fontSize: 18,
//     color: '#888',
//     marginBottom: 20
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 20
//   },
//   content: {
//     fontSize: 16,
//   }
// });

// export default ResourceDetailsScreen;




import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from "react-native";

const ResourceDetailsScreen = () => {
  // Static resource data (UNCHANGED)
  const resource = {
    title: "Wellness Yoga Guide",
    category: "Wellness",
    description:
      "A comprehensive guide to Yoga practices for mental and physical wellness.",
    content:
      "In this guide, we cover a variety of yoga poses, breathing techniques, and mindfulness exercises.",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* HEADER CARD */}
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>{resource.title}</Text>
          <Text style={styles.categoryPill}>{resource.category}</Text>
        </View>

        {/* CONTENT CARD */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📌 Description</Text>
          <Text style={styles.description}>{resource.description}</Text>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>📘 Content</Text>
          <Text style={styles.content}>{resource.content}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ResourceDetailsScreen;

/* ----------------- STYLES ----------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  scroll: {
    padding: 20,
    paddingBottom: 40,
  },

  /* HEADER CARD */
  headerCard: {
    backgroundColor: "#4F46E5",
    padding: 25,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 4,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  categoryPill: {
    alignSelf: "flex-start",
    backgroundColor: "#6366F1",
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    fontWeight: "600",
    fontSize: 14,
  },

  /* MAIN CONTENT CARD */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 20,
    lineHeight: 22,
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15,
  },

  content: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 22,
  },
});

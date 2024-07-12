// /Contact.js

import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TextInput, Button } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const contact = () => {
  const handleFormSubmit = () => {
    // Handle form submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,  // Replace with your coordinates
          longitude: -122.4324,  // Replace with your coordinates
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText} onPress={() => Linking.openURL('https://facebook.com')}>
          Facebook
        </Text>
        <Text style={styles.footerText}>1234 Street, City, State</Text>
        <Text style={styles.footerText}>Phone: (123) 456-7890</Text>
        <Text style={styles.footerText}>Email: contact@example.com</Text>
      </View>

      <TextInput
        label="Name"
        style={styles.input}
      />
      <TextInput
        label="Email"
        style={styles.input}
      />
      <TextInput
        label="Message"
        style={styles.input}
        multiline
      />
      <Button mode="contained" onPress={handleFormSubmit} style={styles.button}>
        Submit
      </Button>

      <WebView
        source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScRlME3ZqIdlOf6hRdbJylu-SRlJxF45ftZIh5MlY5Skw3DhQ/viewform' }}
        style={styles.webview}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    height: 200,
    marginBottom: 20,
  },
  footer: {
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  webview: {
    height: 600,
    marginBottom: 20,
  },
});

export default // component/Contact.js

import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TextInput, Button } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const contact = () => {
  const handleFormSubmit = () => {
    // Handle form submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,  // Replace with your coordinates
          longitude: -122.4324,  // Replace with your coordinates
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText} onPress={() => Linking.openURL('https://facebook.com')}>
          Facebook
        </Text>
        <Text style={styles.footerText}>1234 Street, City, State</Text>
        <Text style={styles.footerText}>Phone: (123) 456-7890</Text>
        <Text style={styles.footerText}>Email: contact@example.com</Text>
      </View>

      <TextInput
        label="Name"
        style={styles.input}
      />
      <TextInput
        label="Email"
        style={styles.input}
      />
      <TextInput
        label="Message"
        style={styles.input}
        multiline
      />
      <Button mode="contained" onPress={handleFormSubmit} style={styles.button}>
        Submit
      </Button>

      <WebView
        source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScRlME3ZqIdlOf6hRdbJylu-SRlJxF45ftZIh5MlY5Skw3DhQ/viewform' }}
        style={styles.webview}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    height: 200,
    marginBottom: 20,
  },
  footer: {
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  webview: {
    height: 600,
    marginBottom: 20,
  },
});

export default contact;
;

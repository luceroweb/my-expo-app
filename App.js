import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [itemCount, setItemCount] = useState(2);
  const [imtes, setItems] = useState({
    1: 'first item',
    2: 'second item',
  });


  return (
    <View style={styles.container}>
      <View
        style={styles.blue}
      >
        <Text
          style={styles.menuLink}
          onPress={() => console.log('home pressed')}
        >
          Home
        </Text>
        <Text
          style={styles.menuLink}
          onPress={() => console.log('about pressed')}
        >
          About
        </Text>
        <Text
          style={styles.menuLink}
          onPress={() => console.log('contact pressed')}
        >
          Contact
        </Text>
      </View>
      <View
        style={styles.orange}
      >
        <Text>Juan</Text>
      </View>
      <View
        style={styles.yellow}
      >
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  blue: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  orange: {
    width: '100%',
    height: 'calc(100% - 150px)',
    backgroundColor: 'orange',
    padding: 30,
  },
  yellow: {
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
  },
  menuLink: {
    color: 'white',
  }
});

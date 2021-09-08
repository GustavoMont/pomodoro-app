
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Clock from './src/Components/Clock';
import Time from './src/Components/Time'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content"  backgroundColor="#1c8080"/>
      <Clock>
        <Time>25:00</Time>
      </Clock>
    </SafeAreaView>

  );
}


import * as React from 'react';
import {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ScrollViewComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <ScrollView style={backgroundStyle}>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          Scroll me plz
        </Text>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          If you like
        </Text>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          Scrolling down
        </Text>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          What's the best
        </Text>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          Framework around?
        </Text>
        <Text
          style={[
            backgroundStyle,
            {fontSize: 80, color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          React Native
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollViewComponent;

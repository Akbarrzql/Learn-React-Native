import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const StyleSheetComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const flattenStyle = StyleSheet.flatten([styles.text, typography.header]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
            borderColor: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        React Native
      </Text>
      <Text style={{marginTop: 30, fontWeight: 'bold'}}>Flatten Style</Text>
      <Text style={styles.code}>{JSON.stringify(flattenStyle, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 6,
    backgroundColor: '#61dafb',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36,
  },
});

export default StyleSheetComponent;

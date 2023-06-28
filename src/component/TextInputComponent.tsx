import * as React from 'react';
import {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

const TextInputComponent = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={[backgroundStyle, {padding: 24}]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        TextInput adalah komponen dasar input teks.
      </Text>
      <Text
        style={{
          marginVertical: 10,
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        <Text style={{fontWeight: 'bold'}}>Contoh TextInput</Text>
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            borderRadius: 5,
            borderColor: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
        placeholder="Masukkan teks"
      />
      <Text
        style={{
          marginVertical: 10,
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        <Text style={{fontWeight: 'bold'}}>Contoh TextInput MultiLine</Text>
      </Text>
      <View
        style={[
          styles.inputMuliLine,
          {borderColor: isDarkMode ? Colors.white : Colors.black},
        ]}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Masukkan teks"
          style={{padding: 10}}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputMuliLine: {
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default TextInputComponent;

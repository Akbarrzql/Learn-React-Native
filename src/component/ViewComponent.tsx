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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ViewComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={[backgroundStyle, {padding: 24}]}>
      <View
        style={[
          styles.sectionContainerText,
          {
            backgroundColor: isDarkMode ? Colors.dark : Colors.light,
            marginBottom: 10,
          },
        ]}>
        <Text style={styles.sectionTitle}>
          Komponen paling mendasar untuk membangun UI, View adalah wadah yang
          mendukung tata letak dengan flexbox , style , beberapa penanganan
          sentuhan , dan kontrol aksesibilitas . Viewmemetakan langsung ke
          tampilan asli yang setara pada platform apa pun yang menjalankan React
          Native, apakah itu UIView, div, android.view, dll.
        </Text>
      </View>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Contoh View</Text>
      </Text>
      <BoxComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainerText: {
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 10,
  },
});

function BoxComponent() {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
      }}>
      <View style={{backgroundColor: 'powderblue', flex: 0.5}} />
      <View style={{backgroundColor: 'skyblue', flex: 0.5}} />
      <View style={{backgroundColor: 'steelblue', flex: 0.5}} />
    </View>
  );
}

export default ViewComponent;

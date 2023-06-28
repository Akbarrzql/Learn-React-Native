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

const TextComponent = () => {
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
          Text mendukung nesting, styling, dan penanganan sentuhan.
        </Text>
      </View>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Contoh Text</Text>
      </Text>
      <TextInANest />
    </View>
  );
};

function TextInANest() {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
}

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
  baseText: {
    marginTop: 10,
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextComponent;

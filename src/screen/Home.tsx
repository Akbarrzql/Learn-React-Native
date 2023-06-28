import {useNavigation} from '@react-navigation/native';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home({navigation}: {navigation: any}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Belajar React">Dokumentasi React Native:</Section>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              paddingVertical: 10,
              marginHorizontal: 24,
            }}
          />
          <Section title="Basic Components">
            <Text style={styles.sectionDescription}>
              Sebagian besar aplikasi pada akhirnya akan menggunakan salah satu
              komponen dasar ini.
            </Text>
          </Section>
          <View style={styles.row}>
            <ButtonComponent>
              <Button
                title="View"
                onPress={() => navigation.navigate('ViewComponent')}
              />
            </ButtonComponent>
            <ButtonComponent>
              <Button
                title="Text"
                onPress={() => navigation.navigate('TextComponent')}
              />
            </ButtonComponent>
          </View>
          <View style={styles.row}>
            <ButtonComponent>
              <Button
                title="Image"
                onPress={() => navigation.navigate('ImageComponent')}
              />
            </ButtonComponent>
            <ButtonComponent>
              <Button
                title="Text Input"
                onPress={() => navigation.navigate('InputTextComponent')}
              />
            </ButtonComponent>
          </View>
          <View style={styles.row}>
            <ButtonComponent>
              <Button
                title="ScrollView"
                onPress={() => navigation.navigate('ScrollViewComponent')}
              />
            </ButtonComponent>
            <ButtonComponent>
              <Button
                title="Style Sheet"
                onPress={() => navigation.navigate('StyleComponent')}
              />
            </ButtonComponent>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type ButtonComponentProps = PropsWithChildren<{
  title?: string;
  onPress?: () => void;
}>;

const ButtonComponent = ({children}: ButtonComponentProps) => (
  <View
    style={{
      paddingVertical: 8,
      flex: 1,
    }}>
    <View>
      <View style={styles.button}>{children}</View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    borderRadius: 4,
    marginBottom: 6,
    textAlign: 'center',
    minWidth: '48%',
    marginHorizontal: 24,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;

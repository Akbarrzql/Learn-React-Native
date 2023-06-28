import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import ViewComponent from '../component/ViewComponent';
import {useColorScheme} from 'react-native';
import TextComponent from '../component/TextComponent';
import ImageComponent from '../component/ImageComponent';
import TextInputComponent from '../component/TextInputComponent';
import ScrollViewComponent from '../component/ScrollViewComponent';
import StyleSheetComponent from '../component/StyleSheetComponent';

const Stack = createNativeStackNavigator();

const Router = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {backgroundColor: isDarkMode ? 'black' : 'white'};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewComponent"
        component={ViewComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Stack.Screen
        name="TextComponent"
        component={TextComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Stack.Screen
        name="ImageComponent"
        component={ImageComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Stack.Screen
        name="InputTextComponent"
        component={TextInputComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Stack.Screen
        name="ScrollViewComponent"
        component={ScrollViewComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Stack.Screen
        name="StyleComponent"
        component={StyleSheetComponent}
        options={{
          headerStyle: {
            backgroundColor: backgroundStyle.backgroundColor,
          },
          headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

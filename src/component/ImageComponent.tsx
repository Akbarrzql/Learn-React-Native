import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ImageComponent = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.sectionContainerImage}>
        <Image
          style={styles.sectionImage}
          source={require('../images/pegunungan.jpeg')}
        />
        <Image
          style={styles.sectionImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.sectionImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1635169157836-57a60025b437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=60',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionImage: {
    margin: 10,
    width: 300,
    height: 200,
    borderRadius: 5,
  },
});

export default ImageComponent;

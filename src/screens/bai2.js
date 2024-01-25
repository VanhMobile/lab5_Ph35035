import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Bai2 = () => {
  return (
    <ImageBackground
      source={require('../img/backgroud.jpg')}
      style={{flex: 1, justifyContent: 'center', padding: 40, gap: 10}}>
      <Text style={styles.title}>Discover {'\n'}world with us</Text>
      <Text style={{color: '#ffffffc6'}}>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.{' '}
      </Text>
      <Pressable>
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            fontSize: 15,
            color: 'black',
            backgroundColor: 'white',
            width: '40%',
            borderRadius: 10,
          }}>
          Get stated
        </Text>
      </Pressable>
      <StatusBar translucent backgroundColor={'rgba(0, 0, 0, 0)'} />
    </ImageBackground>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'JetBrainsMono-VariableFont_wght',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});

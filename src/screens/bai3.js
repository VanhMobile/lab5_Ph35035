/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';

const Bai3 = () => {
  const WIDTH = Dimensions.get('window');
  return (
    <ImageBackground
      source={require('../img/backgroud.jpg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          height: '60%',
          width: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingTop: 30,
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <View style={{paddingHorizontal: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
            HA NOI
          </Text>
          <Text>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flexDirection: 'row',
            padding: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            $100/day
          </Text>
          <Pressable>
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                color: 'blue',
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              Dat ngay
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Bai3;

const styles = StyleSheet.create({});

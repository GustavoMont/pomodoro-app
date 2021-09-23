import React from 'react';
import {
  SafeAreaView, StyleSheet, View, StatusBar,
  TouchableOpacity, Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading';
import { Exo_500Medium, useFonts } from '@expo-google-fonts/exo';
import { Clock, Setas } from './src/Components/Clock';
import Time from './src/Components/Time'

const {width, height} = Dimensions.get('screen')


export default function App() {
  const fonts = useFonts({Exo_500Medium})

  if (!fonts) {
    <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#33711b' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e4010"/>

      <View>
        <Clock size={width/100}>
          <Setas positionY={"top: -22.8px"} rotate={0}>
            <Entypo name="triangle-down" size={50} color="#9f0"/>
          </Setas>
          <Setas positionX={"right: -22.8px;"} rotate={90}>
            <Entypo name="triangle-down" size={50} color="#9f0"/>
          </Setas>
          <Setas positionY={"bottom: -22.8px"} rotate={180}>
            <Entypo name="triangle-down" size={50} color="#9f0"/>
          </Setas>
          <Setas positionX={"left: -22.8px;"} rotate={-90}>
            <Entypo name="triangle-down" size={50} color="#9f0"/>
          </Setas>
          <Time font={'Exo_500Medium'}>25:00</Time>
        </Clock>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
          <Entypo name="controller-jump-to-start" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-stop" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-play" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-paus" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="controller-next" size={50} color="#fff" />
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  triangulo:{
    borderTopLeftRadius: 10,
  }


})
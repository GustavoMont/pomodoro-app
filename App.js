
import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, StatusBar,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { Clock, Setas } from './src/Components/Clock';
import Time from './src/Components/Time'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#135756' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1c8080" />

      <View>
        <Clock>
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
          <Time>25:00</Time>
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
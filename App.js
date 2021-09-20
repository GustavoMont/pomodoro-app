import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, StatusBar,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { Clock, Setas } from './src/Components/Clock';
import Time from './src/Components/Time'

export default function App() {

  const ciclo = [25, 5, 25, 5, 25, 5, 25, 15]
  const [resultado, setResultado] = useState('25:00')
  const [segundos, setSegundos] = useState(ciclo[0])
  const [run, setRun] = useState(false)
  const [indexCiclo, setIndexCiclo] = useState(0)
  let contador = segundos

  const handleCiclo = (atual) =>{
    if (atual === ciclo.length - 2) {
      return -1;
    }
    return atual + 1
  }
  const timer = useCallback(() =>{
    setTimeout(() => {
      contador--
      setSegundos(contador)
    }, 1000);
  }, [run])
  
  useEffect(() =>{
    if (contador < 0) {
      setRun(false)
      setSegundos(ciclo[indexCiclo+1]);
      setIndexCiclo(handleCiclo(indexCiclo))
      return
    }
    if (run) {
      timer()
    }
    setResultado(`${Math.floor(segundos/60)}:${segundos%60 < 10 ? '0' + segundos%60 : segundos%60}`)
  }, [segundos, run])





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
          <Time>{resultado}</Time>
        </Clock>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* <TouchableOpacity activeOpacity={true}>
          <Entypo name="controller-jump-to-start" size={50} color="#fff" />
        </TouchableOpacity> */}
        <TouchableOpacity >
          <Entypo name="controller-stop" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setRun(true)}}>
          <Entypo name="controller-play" size={50} color="#fff"></Entypo>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setRun(false)}} >
          <Entypo name="controller-paus" size={50} color="#fff" />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Entypo name="controller-next" size={50} color="#fff" />
        </TouchableOpacity> */}

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  triangulo:{
    borderTopLeftRadius: 10,
  }


})
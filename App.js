import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, StatusBar,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { Clock, Setas } from './src/Components/Clock';
import Time from './src/Components/Time'
import { handleCiclo } from './src/Utils';

export default function App() {

  const ciclo = [7, 5,/* 7, 5, 7, 5, */7, 15]
  const [resultado, setResultado] = useState('25:00')
  const [segundos, setSegundos] = useState(ciclo[0])
  const [trigger, setTrigger] = useState(false)
  const [indexCiclo, setIndexCiclo] = useState(0)
  const [timer, setTimer] = useState(undefined);
  let contador = segundos


  
  const startTimer = (set) =>{
    set(setInterval(() => {
      contador--
      setSegundos(contador)
    }, 1000));
  }

  const stopInterval = (timer) =>{
      clearInterval(timer)
}

  useEffect(() =>{
    setSegundos(ciclo[indexCiclo])
  }, [indexCiclo])

  useEffect(() =>{
    if (contador < 0) {
      stopInterval(timer)
      setIndexCiclo(handleCiclo(indexCiclo+1, ciclo))
      return
    }
    if (trigger) {
      startTimer(setTimer)
      setTrigger(false)
    }
    setResultado(`${Math.floor(segundos/60)}:${segundos%60 < 10 ? '0' + segundos%60 : segundos%60}`)
  }, [segundos, trigger])





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
        <TouchableOpacity activeOpacity={true}  onPress={() =>{
              stopInterval(timer)
              const index = indexCiclo > 0 ? indexCiclo - 1 : 0
              setSegundos(ciclo[index])
              setIndexCiclo(index)
          }} >
          <Entypo name="controller-jump-to-start" size={50} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Entypo name="controller-stop" size={50} color="#fff" onPress={() =>{
            stopInterval(timer)
            setSegundos(ciclo[indexCiclo])
          }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setTrigger(true)}}>
          <Entypo name="controller-play" size={50} color="#fff"></Entypo>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {stopInterval()}} >
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
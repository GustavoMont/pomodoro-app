import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView, StyleSheet, View, StatusBar,
  TouchableOpacity, Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { Clock, Setas } from './src/Components/Clock';
import Time from './src/Components/Time'
import { handleCiclo, startTimer, stopTimer, playSound } from './src/Utils';

const {width, height} = Dimensions.get('screen')

export default function App() {
  const [sound, setSound] = useState()
  const ciclo = [25, 5, 25, 5, 25, 5, 25, 15]
  const [resultado, setResultado] = useState('25:00')
  const [segundos, setSegundos] = useState(ciclo[0]*60)
  const [trigger, setTrigger] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [indexCiclo, setIndexCiclo] = useState(0)
  const [timer, setTimer] = useState(undefined);

  let contador = segundos

  useEffect(() => {
    setSegundos(ciclo[indexCiclo] * 60)
  }, [indexCiclo])

  useEffect(() => {
    if (contador < 0) {
      playSound(setSound, true)
      stopTimer(timer, setIsRunning, setTrigger)
      setIndexCiclo(handleCiclo(indexCiclo + 1, ciclo))
      return
    }
    if (trigger && !isRunning) {
      startTimer(setTimer, contador, setSegundos)
      setTrigger(false)
      setIsRunning(true)
    }
    setResultado(`${Math.floor(segundos / 60)}:${segundos % 60 < 10 ? '0' + segundos % 60 : segundos % 60}`)
  }, [segundos, trigger])


  const changeInterval = (step) => {
    let index;
    if (step === -1) {
      index = indexCiclo > 0 ? indexCiclo + step : 0
    }
    else {
      index = indexCiclo >= ciclo.length - 1 ? 0 : indexCiclo + step
    }
    stopTimer(timer, setIsRunning, setTrigger)
    setSegundos(ciclo[index]*60)
    setIndexCiclo(index)
  }




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#33711b' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e4010"/>

      <View>
        <Clock size={width/100}>
          <Setas positionY={"top: -22.8px"} rotate={0}>
            <Entypo name="triangle-down" size={50} color="#9f0" />
          </Setas>
          <Setas positionX={"right: -22.8px;"} rotate={90}>
            <Entypo name="triangle-down" size={50} color="#9f0" />
          </Setas>
          <Setas positionY={"bottom: -22.8px"} rotate={180}>
            <Entypo name="triangle-down" size={50} color="#9f0" />
          </Setas>
          <Setas positionX={"left: -22.8px;"} rotate={-90}>
            <Entypo name="triangle-down" size={50} color="#9f0" />
          </Setas>
          <Time>{resultado}</Time>
        </Clock>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => {
          playSound(setSound)
          changeInterval(-1)
        }}>
          <Entypo name="controller-jump-to-start" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Entypo name="controller-stop" size={50} color="#fff" onPress={() => {
            playSound(setSound)
            changeInterval(0)
          }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          playSound(setSound)
          setTrigger(true)
        }}>
          <Entypo name="controller-play" size={50} color="#fff"></Entypo>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound(setSound); stopTimer(timer, setIsRunning, setTrigger);}} >
          <Entypo name="controller-paus" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { playSound(setSound); changeInterval(1) }} >
          <Entypo name="controller-next" size={50} color="#fff" />
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  triangulo: {
    borderTopLeftRadius: 10,
  }


})
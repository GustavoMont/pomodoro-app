import { Audio } from 'expo-av';


export async function playSound(setSound, despertador = false) { 
    if (despertador) {
        const { sound } = await Audio.Sound.createAsync(
          require(`../../assets/sounds/despertador.mp3`)
        );
        setSound(sound);
        await sound.playAsync();
    }
    else{
        const { sound } = await Audio.Sound.createAsync(
          require(`../../assets/sounds/click-sound.mp3`)
        );
        setSound(sound);
        await sound.playAsync();
    }
  }


export const handleCiclo = (atual, ciclo) => {
    return atual % ciclo.length
}

export const startTimer = (setTimer, contador, updater) => {
    setTimer(setInterval(() => {
        contador--
        updater(contador)
    }, 1000));
}

export const stopTimer = (timer) => {
    clearInterval(timer)
}

export const changeInterval = (step, ciclo, indexCiclo,setVar, setRes,timer) => {
    let index;
    if (step === -1) {
        index = indexCiclo > 0 ? indexCiclo + step : 0
    }
    else {
        index = indexCiclo >= ciclo.length - 1 ? 0 : indexCiclo + step
    }
    stopTimer(timer, 'eu que chamei')
    setRes(ciclo[index])
    setVar(index)
}


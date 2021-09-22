import { Audio } from 'expo-av';
export async function playSound(setSound, despertador = false) { 
    let soundPath = 'click-sound.mp3';
    if (despertador) {
        soundPath = 'despertador.mp3'
    }
    const { sound } = await Audio.Sound.createAsync(
      require(`../../assets/sounds/${soundPath}`)
    );
    setSound(sound);
    await sound.playAsync();
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


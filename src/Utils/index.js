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
        updater(contador*60)
    }, 1000));
}

export const stopTimer = (timer, setIsRunning, setTrigger) => {
    setIsRunning(false)
    setTrigger(false)
    clearInterval(timer)
}


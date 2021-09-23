import { Audio } from "expo-av";
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
        console.log('a')
        contador--
        updater(contador)
    }, 1000));
}

export const stopTimer = (timer, setIsRunning, setTrigger) => {
    setIsRunning(false)
    setTrigger(false)
    clearInterval(timer)
}


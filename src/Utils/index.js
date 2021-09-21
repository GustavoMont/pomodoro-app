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

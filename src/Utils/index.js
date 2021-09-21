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

export const changeInterval = (step, ciclo, indexCiclo,setVar, setRes, timer) => {
    let index;
    if (step === -1) {
        index = indexCiclo > 0 ? indexCiclo + step : 0
    }
    else {
        index = indexCiclo >= ciclo.length - 1 ? 0 : indexCiclo + step
    }
    stopTimer(timer)
    setRes(ciclo[index])
    setVar(index)
}


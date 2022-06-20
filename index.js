const unitsToConvert = document.querySelector("#unitsToConvert")
const lengthMeIm = document.getElementById("length-me-im")
const lengthImMe = document.getElementById("length-im-me")
const volumeMeIm = document.getElementById("volume-me-im")
const volumeImMe = document.getElementById("volume-im-me")
const massMeIm = document.getElementById("mass-me-im")
const massImMe = document.getElementById("mass-im-me")

unitsToConvert.focus()
unitsToConvert.addEventListener("keyup", updateConversions)

function updateConversions() {
    const num = parseFloat(unitsToConvert.value) ? parseFloat(unitsToConvert.value) : 0
    lengthMeIm.textContent = `${num} meters = ${calculateLengthMeIm(num)} feet`
    lengthImMe.textContent = `${num} feet = ${calculateLengthImMe(num)} meters`
    volumeMeIm.textContent = `${num} liters = ${calculateVolumeMeIm(num)} gallons`
    volumeImMe.textContent = `${num} gallons = ${calculateVolumeImMe(num)} liters`
    massMeIm.textContent = `${num} kilos = ${calculateMassMeIm(num)} pounds`
    massImMe.textContent = `${num} pounds = ${calculateMassImMe(num)} kilos`
}

function calculateLengthMeIm(metricNum){
    return (metricNum*3.281).toFixed(3)
}

function calculateLengthImMe(imperialNum){
    return (imperialNum/3.281).toFixed(3)
}

function calculateVolumeMeIm(metricNum){
    return (metricNum/3.785).toFixed(3)
}

function calculateVolumeImMe(imperialNum){
    return (imperialNum*3.785).toFixed(3)
}

function calculateMassMeIm(metricNum){
    return (metricNum*2.205).toFixed(3)
}

function calculateMassImMe(imperialNum){
    return (imperialNum/2.205).toFixed(3)
}

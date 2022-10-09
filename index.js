const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const feetToMeter = 1 / 3.281
const gallonToLiter = 1 / 0.264
const poundToKilo = 1 / 2.204 

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function(){
   let baseValue = inputEl.value
   lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters` 
   volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
   massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`
   inputEl.value = ""
})


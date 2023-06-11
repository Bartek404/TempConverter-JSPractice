'use strict'

const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const toCelsius = () => {
	const celsius = Math.round((converter.value - 32) / 1.8)
	result.textContent = `${converter.value}°F to ${celsius}°C`
	converter.value = ''
}

const toFahrenheit = () => {
	const fahrenheit = Math.round(converter.value * 1.8 + 32)
	result.textContent = `${converter.value}°C to ${fahrenheit}°F`
	converter.value = ''
}

const swapFn = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const conversionFn = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			toFahrenheit()
		} else {
			toCelsius()
		}
	} else {
		result.textContent = 'Proszę podać wartość'
	}
}

const resetFn = () => {
	converter.value = ''
	result.textContent = ''
}

changeBtn.addEventListener('click', swapFn)
convBtn.addEventListener('click', conversionFn)
resetBtn.addEventListener('click', resetFn)

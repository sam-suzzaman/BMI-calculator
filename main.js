let form = document.querySelector('form')

form.addEventListener('submit', function (e) {

    // to prevent auto reload
    e.preventDefault()

    // grab the input
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let display = document.querySelector('.result-display')

    if ((height === '') || (height < 0) || (isNaN(height))) {
        display.innerHTML = 'Please enter the right height'
    } else if ((weight === '') || (weight < 0) || (isNaN(weight))) {
        display.innerHTML = 'Please enter the right weight'
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // print the message
        if (bmi < 18.6) {
            display.innerHTML = `you are in underweight and your BMI is = ${bmi}`
        } else if ((bmi > 18.6) && (bmi < 24.9)) {
            display.innerHTML = `you are in normal range and your BMI is = ${bmi}`
        } else {
            display.innerHTML = `you are in overweight and your BMI is = ${bmi}`
        }
    }

})
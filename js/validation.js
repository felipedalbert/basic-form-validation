const inputLine = document.querySelectorAll('.input-line')
const sendButton = document.querySelector('button')


sendButton.addEventListener('click', () =>{

    inputLine.forEach(thisInputLine =>{

        const inputData = thisInputLine.querySelectorAll('[placeholder]')
        const errorAlert = thisInputLine.querySelector('span')

        inputData.forEach(item =>{

            if(item.value == ''){
                thisInputLine.classList.add('error-validation')
                item.classList.add('error-validation')
                errorAlert.classList.add('error-validation')

            }
        })
    })
})

inputLine.forEach(thisInputLine => {
    const inputData = thisInputLine.querySelectorAll('[placeholder]')
    const errorAlert = thisInputLine.querySelector('span')

    inputData.forEach(item => {
        item.addEventListener('change', () =>{
            if(item.value !== ''){
                thisInputLine.classList.remove('error-validation')
                item.classList.add('correct-validation')
                errorAlert.classList.remove('error-validation')

            }else if(item.value == ''){
                item.classList.remove('correct-validation')
                item.classList.add('error-validation')
                thisInputLine.classList.add('error-validation')
                errorAlert.classList.add('error-validation')

                if(item.classList.contains('error-validation')){
                    thisInputLine.classList.add('error-validation')
                    errorAlert.classList.add('error-validation')
                }
            }
        })
    }) 
})

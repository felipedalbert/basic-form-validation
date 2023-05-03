const inputLine = document.querySelectorAll('.input-line')
const form = document.querySelector('form')
const orientationText = document.querySelector('.orientation-text')
let deleteCounter

function errorValidation(thisInputLine, inputData){
    thisInputLine.classList.add('error-validation')
    inputData.classList.add('error-validation')
    inputData.nextElementSibling.classList.add('error-validation')
}

function correctValidation(thisInputLine, inputData){
    thisInputLine.classList.remove('error-validation')
    inputData.classList.remove('error-validation')
    inputData.nextElementSibling.classList.remove('error-validation')
    inputData.classList.add('correct-validation')
}



form.addEventListener('submit', (e) =>{
    e.preventDefault()

    inputLine.forEach(thisInputLine => {
        const inputData = thisInputLine.querySelector('[placeholder]')

        function insideValidation(){
            inputData.addEventListener('input', () =>{
                if(inputData.value == ''){
                    errorValidation(thisInputLine, inputData)
                    inputData.classList.remove('correct-validation')
                }else if(inputData.value !== ''){
                    correctValidation(thisInputLine, inputData)
                    
                }
            })
        }

        if(inputData.value == ''){
            errorValidation(thisInputLine, inputData)

            insideValidation()
        }else if(inputData.value !== ''){
            correctValidation(thisInputLine, inputData)

            insideValidation()
        }

        deleteCounter = document.querySelectorAll('.correct-validation')
    })
    
    if(deleteCounter && deleteCounter.length === 4){
        orientationText.innerHTML = 'Mensagem eviada com sucesso!'

        setTimeout(1000)

        form.submit()
    }

    orientationText.style.color = 'green'
    
})



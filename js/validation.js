const inputLine = document.querySelectorAll('.input-line')
const sendButton = document.querySelector('button')
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

inputLine.forEach(thisInputLine => {
    const inputData = thisInputLine.querySelector('[placeholder]')

    sendButton.addEventListener('click', () =>{
        function insideValidation(){
            inputData.addEventListener('input', () =>{
                if(inputData.value == ''){
                    errorValidation(thisInputLine, inputData)
                }
            })
        }

        if(inputData.value == ''){
            errorValidation(thisInputLine, inputData)

            insideValidation()
        }else if(inputData.value !== ''){
            insideValidation()
        }

        if(deleteCounter && deleteCounter.length === 4){
            location.reload()
        }
    })

    inputData.addEventListener('input', () =>{
        if(inputData.value !== ''){
            correctValidation(thisInputLine, inputData)
            console.log('caiu embaixo')

        }else if(inputData.value == ''){
            inputData.classList.remove('correct-validation')
        }
    })

    inputData.addEventListener('change', ()=>{
        deleteCounter = document.querySelectorAll('.correct-validation')
    })
})


const inputLine = document.querySelectorAll('.input-line')
const form = document.querySelector('form')
const orientationText = document.querySelector('.orientation-text')
let deleteCounter

function errorValidation(thisInputLine, inputData, emailValidation){
    if(emailValidation){
        thisInputLine.classList.add('error-validation')
        inputData.classList.add('error-validation')
        inputData.nextElementSibling.classList.add('error-validation')
        inputData.nextElementSibling.innerText = 'Digite um email válido'
        console.log('oi')

    }else{
        thisInputLine.classList.add('error-validation')
        inputData.classList.add('error-validation')
        inputData.nextElementSibling.classList.add('error-validation') 
    }

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
                    inputData.classList.remove('correct-validation')
                }
            })
        }

        function validationEmail(){
            let returnValue

            if(inputData.name === 'email'){
                const emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
                const inputEmail = inputData.value

                console.log(inputData.value)

                if (!emailRegExp.test(inputEmail)) {
                    errorValidation(thisInputLine, inputData, true)
                    insideValidation()
                    returnValue = true
                }else{
                    returnTrue = false
                }
    
            }

            if (returnValue === true) return true
        }

        if(inputData.value == ''){
            errorValidation(thisInputLine, inputData)

            insideValidation()
        }else if(inputData.value !== ''){
            
            if(validationEmail()) return

            correctValidation(thisInputLine, inputData)

            insideValidation() 
        }

        deleteCounter = document.querySelectorAll('.correct-validation')
    })
    
    if(deleteCounter && deleteCounter.length === 4){
        const allInputData = document.querySelectorAll('[placeholder]')
        allInputData.forEach(input => {
            input.style.borderColor = 'black'
        })
        
        orientationText.innerHTML = 'Mensagem eviada com sucesso!'
        orientationText.style.color = 'green'

        setTimeout(()=>form.submit(), 1000)
    }  
})



const inputLine = document.querySelectorAll('.input-line')
const sendButton = document.querySelector('button')
let contadorDeExclusao = 0

inputLine.forEach(thisInputLine => {
    const inputData = thisInputLine.querySelector('[placeholder]')
    const errorAlert = thisInputLine.querySelector('span')

    function errorValidation(){
        inputData.classList.add('error-validation')
        thisInputLine.classList.add('error-validation')
        errorAlert.classList.add('error-validation')
    }

    function correctValidation(){
        thisInputLine.classList.remove('error-validation')
        inputData.classList.remove('error-validation')
        errorAlert.classList.remove('error-validation')
        inputData.classList.add('correct-validation')
    }

    sendButton.addEventListener('click', () =>{

        if(inputData.value == ''){
            errorValidation()

            inputData.addEventListener('change', () =>{
                if(inputData.value == ''){
                    errorValidation()
                }
            })

        }else if(inputData.value !== ''){
            inputData.addEventListener('change', () =>{
                if(inputData.value == ''){
                    errorValidation()
                }
            })
        }

        if(contadorDeExclusao == 4){
            location.reload()
        }
    })

    inputData.addEventListener('change', () =>{
        if(inputData.value !== ''){
            correctValidation()
            contadorDeExclusao++

            if(contadorDeExclusao > 4){
                return
            }

            console.log(contadorDeExclusao)

        }else if(inputData.value == ''){
            inputData.classList.remove('correct-validation')
            contadorDeExclusao--
            console.log(contadorDeExclusao)
        }
    }) 
})


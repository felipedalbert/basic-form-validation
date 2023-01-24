const inputLine = document.querySelectorAll('.input-line')
const sendButton = document.querySelector('button')
let deleteCounter = 0

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
        function insideValidation(){
            inputData.addEventListener('change', () =>{
                if(inputData.value == ''){
                    errorValidation()
                }
            })
        }

        if(inputData.value == ''){
            errorValidation()

            insideValidation()

        }else if(inputData.value !== ''){
            insideValidation()
        }

        if(deleteCounter == 4){
            location.reload()
        }
    })

    inputData.addEventListener('change', () =>{
        if(inputData.value !== ''){
            correctValidation()
            deleteCounter++

            if(deleteCounter > 4){
                deleteCounter--
            }

            console.log(deleteCounter)

        }else if(inputData.value == ''){
            inputData.classList.remove('correct-validation')
            deleteCounter--
            console.log(deleteCounter)
        }
    }) 
})


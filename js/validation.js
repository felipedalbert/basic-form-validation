const inputLine = document.querySelectorAll('.input-line')
const sendButton = document.querySelector('button')
let deleteCounter = 0

inputLine.forEach(thisInputLine => {
    const inputData = thisInputLine.querySelector('[placeholder]')

    function errorValidation(){
        thisInputLine.classList.add('error-validation')
        inputData.classList.add('error-validation')
        inputData.nextElementSibling.classList.add('error-validation')
    }

    function correctValidation(){
        thisInputLine.classList.remove('error-validation')
        inputData.classList.remove('error-validation')
        inputData.nextElementSibling.classList.remove('error-validation')
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


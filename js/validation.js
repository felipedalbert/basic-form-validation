const inputLine = document.querySelectorAll('.input-line')
const form = document.querySelector('form')
const orientationText = document.querySelector('.orientation-text')
let deleteCounter

function errorValidation(thisInputLine, inputData, regexValidator) {
    function addDefaultClasses(){
        thisInputLine.classList.add('error-validation')
        inputData.classList.add('error-validation')
        inputData.nextElementSibling.classList.add('error-validation')
    }

    if(regexValidator) {
        addDefaultClasses()

        switch (regexValidator){
            case 'email':
                inputData.nextElementSibling.innerText = 'Digite um email válido' 
                break
            case 'tel':
                inputData.nextElementSibling.innerText = 'Digite um telefone válido'
                break
        }
    }else{
        addDefaultClasses()
    }
}

function correctValidation(thisInputLine, inputData){
    thisInputLine.classList.remove('error-validation')
    inputData.classList.remove('error-validation')
    inputData.nextElementSibling.classList.remove('error-validation')
    inputData.classList.add('correct-validation')
}

function insertTelMask(){
    const inputTel = document.querySelector('[name="telephone"]')

    inputTel.addEventListener('input', (e)=>{
        let valor = e.target.value;

        valor = valor.replace(/\D/g, '');
        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

        console.log(valor.length)

        if (valor.length > 15) valor = valor.slice(0, 15);

        e.target.value = valor;
    })
    
}

insertTelMask()

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    inputLine.forEach(thisInputLine => {
        const inputData = thisInputLine.querySelector('[placeholder]')
        
        function afterSubmitValidation(){
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

        function emailValidation(){
            let returnValue

            if(inputData.name === 'email'){
                const emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
                const inputEmailValue = inputData.value

                if (!emailRegExp.test(inputEmailValue)) {
                    errorValidation(thisInputLine, inputData, 'email')
                    afterSubmitValidation()
                    returnValue = true
                }else{
                    returnTrue = false
                }
    
            }

            if (returnValue === true) return true
        }

        function telValidation() {
            console.log('entrou')

            let returnValue

            if(inputData.name === 'telephone'){
                console.log('entrou')
                const telRegExp = /^\(\d{2}\) \d{5}\-\d{4}$/;
                const inputTelValue = inputData.value;

                if (!telRegExp.test(inputTelValue)) {
                    errorValidation(thisInputLine, inputData, 'tel')
                    afterSubmitValidation()
                    returnValue = true
                } else {
                    returnTrue = false
                }
    
            }

            if (returnValue === true) return true
        }

        if(inputData.value == ''){
            errorValidation(thisInputLine, inputData)

            afterSubmitValidation()
        }else if(inputData.value !== ''){
            
            if((!emailValidation()) && (!telValidation())){
                correctValidation(thisInputLine, inputData)

                afterSubmitValidation() 
            } 
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
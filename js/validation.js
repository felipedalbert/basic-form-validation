const inputLine = document.querySelectorAll('.input-line')
const form = document.querySelector('form')
const orientationText = document.querySelector('.orientation-text')
let deleteCounter

function errorValidation(thisInputLine, inputData, errorType) {
    function addDefaultClasses(){

        thisInputLine.classList.add('error-validation')
        inputData.classList.add('error-validation')
        inputData.nextElementSibling.classList.add('error-validation')
    }

    if(errorType) {
        addDefaultClasses()

        inputData.nextElementSibling.innerText = errorType === 'email' ? 
        'Digite um email válido' : 'Digite um telefone válido'
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

        if (valor.length > 15) valor = valor.slice(0, 15);

        e.target.value = valor;
    })
    
}

insertTelMask()

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    inputLine.forEach(thisInputLine => {

        const inputData = thisInputLine.querySelector('[placeholder]')
        
        function validateAfterSubmit(){
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

        function validateContact() {

            let returnValue

            function regexValidator(validator, typeErrorMessage){

                if(validator){
                    errorValidation(thisInputLine, inputData, typeErrorMessage)
                    validateAfterSubmit()
                    returnValue = true
                }else{
                    returnTrue = false
                }
            }

            if(inputData.name === 'telephone'){

                const telRegExp = /^\(\d{2}\) \d{5}\-\d{4}$/;
                const inputTelValue = inputData.value;

                regexValidator(!telRegExp.test(inputTelValue), 'tel')
            }else if(inputData.name === 'email'){

                const emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
                const inputEmailValue = inputData.value

                regexValidator(!emailRegExp.test(inputEmailValue), 'email')
            }

            if (returnValue === true) return true
        }

        if(inputData.value == ''){

            errorValidation(thisInputLine, inputData)

            validateAfterSubmit()
        }else if(inputData.value !== ''){
            
            if(!validateContact()){
                correctValidation(thisInputLine, inputData)

                validateAfterSubmit() 
            } 
        }

        deleteCounter = document.querySelectorAll('.correct-validation')
    })
    
    if(deleteCounter && deleteCounter.length === 4){
        
        orientationText.innerHTML = 'Mensagem eviada com sucesso!'
        orientationText.style.color = 'green'

        setTimeout(()=>form.submit(), 300)
    }  
})
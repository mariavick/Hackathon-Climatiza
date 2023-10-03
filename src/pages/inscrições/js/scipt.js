class Validator{
    constructor(){
        this.validations = ['data-min-length',]
    }
    validate(form){
        let inputs = form.getElementsByTagName('input');
        let inputsAsrray = [...inputs];
        inputsAsrray.forEach(function(input){
            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) != null){
                    let method = this.validations[i].replace('data-','').replace('-', '');
                    let value = input.getAttribute(this.validations[i]);
                    this[method](input, value); 
                }
            }
        }, this);
    }
    minlenght(input, minValue){
        console.log(input)
        console.log(minValue)
        // let inputLength = input.value.length;
        // let errorMessage = `O campo precisa ter pelo o menos ${minValue} caracteres`;
        // if(inputLength < minValue){
        //     console.log(errorMessage);
        // }
    }
}



let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    validator.validate(form)
})
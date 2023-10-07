class Validator {
    constructor() {
        this.validations = ['data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            'data-equal',
            'data-password-validate',
        ]
    }
    validate(form) {

        let currentValidations = document.querySelectorAll('form .error-validation');
        if (currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        let inputs = form.getElementsByTagName('input');
        let inputsAsrray = [...inputs];
        inputsAsrray.forEach(function (input) {
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {
                    let method = this.validations[i].replace('data-', '').replace('-', '');
                    let value = input.getAttribute(this.validations[i]);
                    this[method](input, value);
                }
            }
        }, this);
    }

    minlength(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo o menos ${minValue} caracteres`;
        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }

    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }
}

let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator();

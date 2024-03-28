import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
    })
export class RegisterFormComponent {

    //second way
    @ViewChild('registerForm') form: NgForm | undefined;

    // Renders static content
    // ngOnInit(): void {}

    // Renders the final content + dynamic content
    // ngAfterViewInit(): void {}

    formSubmitHandler() { //first way => formSubmitHandler(registerForm)
        if (!this.form) {
            return;
        }

        const form = this.form;

        if (form?.invalid) {
            console.log('Form is invalid');
            return;
        }

        // form value => ngModel as attribute
        const { email, password } = form?.value;

        console.log('invalid', form.invalid);
        
        console.log(form);

        //2 ways of reseting data
        // form.setValue({ email: '', password: '' });
        form.reset();
    }
}

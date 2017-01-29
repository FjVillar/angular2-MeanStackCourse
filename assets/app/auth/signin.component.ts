import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

// const EMAIL_PATTERN = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor (private authService: AuthService, private router: Router) {}

    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required
                // ,
                // Validators.pattern(EMAIL_PATTERN)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
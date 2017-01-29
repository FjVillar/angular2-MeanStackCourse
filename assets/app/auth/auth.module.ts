import { authRouting } from './auth.routing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ], 
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})

export class AuthModule {

}
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';

import { RouterModule, Routes } from '@angular/router';

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
]

export const authRouting = RouterModule.forChild(AUTH_ROUTES);
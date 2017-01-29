import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
//# sourceMappingURL=auth.routing.js.map
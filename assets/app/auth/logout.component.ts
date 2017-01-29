import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Component } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
   
}
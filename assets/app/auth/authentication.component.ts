import { AuthService } from './auth.service';
import { Component } from "@angular/core";

@Component({
    selector: "app-authentication",
    template: `
    <header class="row spacing">
        <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-tabs">
                <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
                <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Signout</a></li>
            </ul>
        </nav>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    </header>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
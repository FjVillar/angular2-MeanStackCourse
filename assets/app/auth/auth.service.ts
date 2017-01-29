import { ErrorService } from '../errors/error.service';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

const URL_USER =  'https://angular2-.herokuapp.com/user';

 @Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService){
        
    }

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(URL_USER, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(URL_USER  + '/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
    
}
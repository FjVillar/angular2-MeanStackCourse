import { ErrorService } from '../errors/error.service';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
var URL_USER = 'https://angular2-.herokuapp.com/user';
export var AuthService = (function () {
    function AuthService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(URL_USER, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handledError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(URL_USER + '/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handledError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map
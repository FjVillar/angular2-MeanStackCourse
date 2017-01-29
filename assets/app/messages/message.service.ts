import { ErrorService } from '../errors/error.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Message } from "./message.model";

const URL_MESSAGES =  'https://angular2-.herokuapp.com/message';

 @Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {}

    addMessage(message: Message){ 
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
                ? '?token=' + localStorage.getItem('token')
                : '' ;
        return this.http.post(URL_MESSAGES + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content, 
                    result.obj.user.firstName, 
                    result.obj._id, 
                    result.obj.user._id
                );
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }

    getMessages() {
        return this.http.get(URL_MESSAGES)
            .map((response: Response) =>{
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
                ? '?token=' + localStorage.getItem('token')
                : '' ;
        return this.http.patch(URL_MESSAGES + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);

        const token = localStorage.getItem('token')
                ? '?token=' + localStorage.getItem('token')
                : '' ;
        return this.http.delete(URL_MESSAGES + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handledError(error.json());
                return Observable.throw(error.json());
            });
    }
}
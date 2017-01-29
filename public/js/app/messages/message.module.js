import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { NgModule } from '@angular/core';
export var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MessageComponent,
                        MessageListComponent,
                        MessageInputComponent,
                        MessagesComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    providers: [
                        MessageService
                    ]
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = [];
    return MessageModule;
}());
//# sourceMappingURL=message.module.js.map
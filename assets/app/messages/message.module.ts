import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { NgModule } from '@angular/core';


@NgModule({
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
})

export class MessageModule {

}
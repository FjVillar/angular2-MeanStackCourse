import { Component } from "@angular/core";
import { MessageService } from "./message.service";
export var MessageListComponent = (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-list',
                    template: "\n\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t<app-message \n\t\t\t\t[message]=\"message\" \n\t\t\t\t*ngFor=\"let message of messages\">\n\t\t\t\t\t\n\t\t\t</app-message>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = [
        { type: MessageService, },
    ];
    return MessageListComponent;
}());
//# sourceMappingURL=message-list.component.js.map
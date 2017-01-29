import { Component } from "@angular/core";
export var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-messages",
                    template: "\n    <div class=\"row\">\n\t\t<div class=\"col-md-9 col-md-offset-2\">\n\t\t<div class=\"row\">\n\t\t\t<app-message-input></app-message-input>\n\t\t</div>\n\t\t<hr>\n\t\t\t<app-message-list></app-message-list>\t\n\t\t</div>\n\t</div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = [];
    return MessagesComponent;
}());
//# sourceMappingURL=messages.component.js.map
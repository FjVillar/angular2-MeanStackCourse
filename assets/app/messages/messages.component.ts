
import { Component } from "@angular/core";

@Component({
    selector: "app-messages",
    template: `
    <div class="row">
		<div class="col-md-9 col-md-offset-2">
		<div class="row">
			<app-message-input></app-message-input>
		</div>
		<hr>
			<app-message-list></app-message-list>	
		</div>
	</div>
    `
})
export class MessagesComponent {

}
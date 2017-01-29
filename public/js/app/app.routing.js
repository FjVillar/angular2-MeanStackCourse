import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { RouterModule } from '@angular/router';
var APP_ROUTES = [
    { path: "", redirectTo: "/messages", pathMatch: "full" },
    { path: "messages", component: MessagesComponent },
    { path: "auth", component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map
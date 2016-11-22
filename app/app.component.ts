import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from './pages/signup/signup.component';
import {AddComponent} from './pages/add/add.component';
import {ListComponent} from './pages/list/list.component';

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: '<page-router-outlet></page-router-outlet>'
})
@RouteConfig([
  { path: '/Login', component: LoginComponent, name: 'Login', useAsDefault: true },
  { path: '/Signup', component: SignupComponent, name: 'Signup' },
  { path: '/Add', component: AddComponent, name: 'Add' },
  { path: '/List', component: ListComponent, name: 'List' }
])
export class AppComponent implements OnInit {
    constructor(private page: Page) {} 

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    
}

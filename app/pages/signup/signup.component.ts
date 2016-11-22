import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
var firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'signup',
    templateUrl: 'pages/signup/signup.html',
    styleUrls: ['pages/signup/signup.css']
})

export class SignupComponent {
    public email:string;
    private password:string;
    private confirmPassword:string;

    constructor(public myRouter: Router){}

    register(){
        if (this.password !== this.confirmPassword) {
            alert('Please enter matching passwords');
        }else {
            firebase.createUser({
                email: this.email,
                password: this.password
            }).then(
                (result) => {
                    alert('New User Created: ' + this.email);
                    this.myRouter.navigate(['Login']);
                },
                (errorMessage) => {
                    alert('Could not create user because ' + errorMessage);            
                }
            )
        }
    }

    cancel(){
        this.myRouter.navigate(['Login']);
    }
}
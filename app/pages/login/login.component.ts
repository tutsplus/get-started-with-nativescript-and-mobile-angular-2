import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
var firebase = require("nativescript-plugin-firebase");




@Component({
    selector: 'login',
    templateUrl: 'pages/login/login.html',
    styleUrls: ['pages/login/login.css']
})
export class LoginComponent {
    
    public email:string;
    private password:string;
    
    

    constructor(public myRouter: Router){
        this.fbInit();
    }

     fbInit(){
        firebase.init({
            
        });
    }

    login(){
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.password
        }).then(
            (result) => {
                alert(this.email + ' Logged in');
                this.myRouter.navigate(['List']);
                
            },
            (errorMessage) => {
                
                console.log(errorMessage);
                

                alert('Could not login in ' + errorMessage);
                
            }
        )
    }

    signUp(){
        this.myRouter.navigate(['Signup']);
    }
}
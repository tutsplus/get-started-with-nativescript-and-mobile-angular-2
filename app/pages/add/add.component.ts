import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
var firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'add',
    templateUrl: 'pages/add/add.html',
    styleUrls: ['pages/add/add.css']
})

export class AddComponent {
    public title:string;
    public note:string;

    constructor(public myRouter: Router){}

    addNote(){
        if (!this.title || !this.note){
            alert('You need a Title and Note!');
        }else {
            firebase.push(
                '/notes',
                {     
                    'title': this.title ,
                    'note': this.note
                }
            ).then(
                (result) => {
                    alert("Added note: " + this.title);
                    this.myRouter.navigate(['List']);
                }
            );
        }
    }

    cancel(){
        this.myRouter.navigate(['List']);    
    }
}
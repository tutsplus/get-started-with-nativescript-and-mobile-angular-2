import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
var firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'list',
    templateUrl: 'pages/list/list.html',
    styleUrls: ['pages/list/list.css']
})

export class ListComponent implements OnInit {
    notes: Array<Object> = [];

    constructor(public myRouter: Router){}

    ngOnInit() {
        this.getNotes();
    }

    
    public getNotes(){    
        var onChildEvent = (result) =>{
            console.log(JSON.stringify(result.value));
            this.notes.push({
                    title: result.value.title,
                    note: result.value.note
            });
         }
         return firebase.addChildEventListener(onChildEvent, "/notes");          
    }

    add(){
        this.myRouter.navigate(['Add']);    
    }    
}
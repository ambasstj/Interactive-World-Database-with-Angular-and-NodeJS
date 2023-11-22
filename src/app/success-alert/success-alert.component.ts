import { Component } from "@angular/core";

@Component({
    selector: '<success-alert>',
    template:`
 <p>This is the inline way using backticks and p tag</p>
    `,
    styles: [`
    p {
        color:red;
        padding:20px;
        border: 1px solid red;
        background-color: darkred;
        margin-left: 10px;
    }
    `
    ]

})


export class SuccessAlertComponent{

}
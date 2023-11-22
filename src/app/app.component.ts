import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue = 'T-Breezeh';
  isEmpty = true;
  username = "";
  usernameSet=false;
  showDisplay = true;
  outPutArray = [];


  inputAction(event:any){
this.isEmpty=false;
this.username = event.target.value;
if (this.username == ""){
  this.isEmpty = true;
}
}
toggleDisplay(event: any){
  console.log(event)
  this.outPutArray.push(new Date());
this.showDisplay = !this.showDisplay;
}
resetUsername(){
  this.username = ""
  this.isEmpty = true
}
setUsername(){
  this.usernameSet=true;
}
onEventAction(event: any){
this.inputValue = event.target.value;
}


}

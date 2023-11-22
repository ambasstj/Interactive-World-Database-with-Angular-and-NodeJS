import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  allowButton = false;
  serverStatus = false;
  serverName = "";
  serverStatusMessage = "No active server"

  constructor(){
    setTimeout(() => {
    this.allowButton=true}, 2000);
    this.serverStatus = Math.random() > 0.5 ? true: false;
}
onEventAction(event:any){
  this.serverName = event.target.value
}
onServerStart(){
  this.serverStatus = true;
  this.serverStatusMessage = "Server was created! Name is " + this.serverName
}
onServerEnd(){
  this.serverStatus = false;
  this.serverStatusMessage = "Server: " +this.serverName + ", has ended."
}
getColor(){
  return this.serverStatus === true ? 'green': 'red';
}
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestComponent } from './test/test.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import {  SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    AppComponent, ServerComponent, TestComponent, WarningAlertComponent, SuccessAlertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

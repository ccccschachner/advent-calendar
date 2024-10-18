import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import this

import { AppComponent } from './app.component';
//import { AdventCalendarComponent } from './app.component'; // Your component

@NgModule({
  declarations: [
    AppComponent,
    //AdventCalendarComponent // Declare your component here
  ],
  imports: [
    BrowserModule,
    CommonModule // Add this to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

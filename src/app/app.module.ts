import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import this
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    CommonModule // Add this to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

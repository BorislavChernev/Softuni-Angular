import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { ImageLinkDirective } from './image-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ImageLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Template Driven Approach
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ANavbarComponent } from './a-navbar/a-navbar.component';
import { BFooterComponent } from './b-footer/b-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ANavbarComponent,
    BFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

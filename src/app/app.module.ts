import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { TestimonialsCardComponent } from './partials/testimonials-card/testimonials-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AboutMeComponent,
    TestimonialsComponent,
    TestimonialsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

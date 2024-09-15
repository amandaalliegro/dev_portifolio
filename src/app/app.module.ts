import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { TestimonialsCardComponent } from './partials/testimonials-card/testimonials-card.component';
import { ContactMeComponent } from './partials/contact-me/contact-me.component';
import { WorkDisplayComponent } from './modules/work-display/work-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AboutMeComponent,
    TestimonialsComponent,
    TestimonialsCardComponent,
    ContactMeComponent,
    WorkDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

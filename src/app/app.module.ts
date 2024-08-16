import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from './component/hero/hero.component';
import { WhyComponent } from './component/why/why.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { CategoryComponent } from './component/category/category.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DigitalmarketingComponent } from './pages/digitalmarketing/digitalmarketing.component';
import { GraphicdesigningComponent } from './pages/graphicdesigning/graphicdesigning.component';
import { UiuxComponent } from './pages/uiux/uiux.component';
import { WebdevelopmentComponent } from './pages/webdevelopment/webdevelopment.component';
import { WebdesigningComponent } from './pages/webdesigning/webdesigning.component';
import { CollegeprojectsComponent } from './pages/collegeprojects/collegeprojects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WhyComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    CategoryComponent,
    AboutComponent,
    HomeComponent,
    DigitalmarketingComponent,
    GraphicdesigningComponent,
    UiuxComponent,
    WebdevelopmentComponent,
    WebdesigningComponent,
    CollegeprojectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DigitalmarketingComponent } from './pages/digitalmarketing/digitalmarketing.component';
import { GraphicdesigningComponent } from './pages/graphicdesigning/graphicdesigning.component';
import { UiuxComponent } from './pages/uiux/uiux.component';
import { WebdevelopmentComponent } from './pages/webdevelopment/webdevelopment.component';
import { WebdesigningComponent } from './pages/webdesigning/webdesigning.component';
import { CollegeprojectsComponent } from './pages/collegeprojects/collegeprojects.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'webdesigning', component: WebdesigningComponent},
  {path: 'webdevelopment', component: WebdevelopmentComponent},
  {path: 'digitalmarketing', component: DigitalmarketingComponent},
  {path: 'uiux', component: UiuxComponent},
  {path: 'graphicdesigning', component: GraphicdesigningComponent},
  {path: 'collegeprojects', component: CollegeprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

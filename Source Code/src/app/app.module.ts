import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './components/page/page.component';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
 {
    path: '',
    component: CurriculumComponent
 }
];

const config: ExtraOptions = {

    useHash: true,

};

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    CurriculumComponent,
    PageComponent
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    HttpClientModule,
    BrowserAnimationsModule,
TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
        },
        deps: [ HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


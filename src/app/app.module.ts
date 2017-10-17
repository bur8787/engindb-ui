import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {UserDetailPage} from '../pages/user-detail/user-detail';
import {UserSearchPage} from "../pages/user-search/user-search";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserRegistPage} from "../pages/user-regist/user-regist";
import {CompanyRegistPage} from "../pages/company-regist/company-regist";
import {ContactPage} from "../pages/contact/contact";
import {TermsPage} from "../pages/terms/terms";
import {HomePage} from "../pages/home/home";
import {ContactUsPage} from "../pages/contact-us/contact-us";

@NgModule({
  declarations: [
    MyApp,
    UserDetailPage,
    UserSearchPage,
    UserRegistPage,
    CompanyRegistPage,
    ContactPage,
    ContactUsPage,
    TermsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserDetailPage,
    UserSearchPage,
    UserRegistPage,
    CompanyRegistPage,
    ContactPage,
    ContactUsPage,
    TermsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}

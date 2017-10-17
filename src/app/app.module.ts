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

@NgModule({
  declarations: [
    MyApp,
    UserDetailPage,
    UserSearchPage,
    UserRegistPage,
    CompanyRegistPage
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
    CompanyRegistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}

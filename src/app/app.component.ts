import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {UserSearchPage} from "../pages/user-search/user-search";
import {UserRegistPage} from "../pages/user-regist/user-regist";
import {CompanyRegistPage} from "../pages/company-regist/company-regist";
import {HomePage} from "../pages/home/home";
import {TermsPage} from "../pages/terms/terms";
import {ContactPage} from "../pages/contact/contact";
import {ContactUsPage} from "../pages/contact-us/contact-us";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserSearchPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ホーム', component: HomePage },
      { title: 'エンジニア検索', component: UserSearchPage },
      { title: 'エンジニア登録', component: UserRegistPage },
      { title: '企業登録', component: CompanyRegistPage },
      { title: 'メッセージ', component: ContactPage },
      { title: '利用規約', component: TermsPage },
      { title: 'お問い合わせ', component: ContactUsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

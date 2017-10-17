import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyRegistPage } from './company-regist';

@NgModule({
  declarations: [
    CompanyRegistPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyRegistPage),
  ],
})
export class CompanyRegistPageModule {}

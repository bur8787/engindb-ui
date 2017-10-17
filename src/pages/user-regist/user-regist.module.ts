import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegistPage } from './user-regist';

@NgModule({
  declarations: [
    UserRegistPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegistPage),
  ],
})
export class UserRegistPageModule {}

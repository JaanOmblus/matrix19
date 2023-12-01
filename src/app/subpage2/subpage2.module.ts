import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage2PageRoutingModule } from './subpage2-routing.module';

import { Subpage2Page } from './subpage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage2PageRoutingModule
  ],
  declarations: [Subpage2Page]
})
export class SubpagePageModule {}
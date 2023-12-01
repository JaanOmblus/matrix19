import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { EfektComponent } from '../matrixEfekt/matrixEfekt.component';
import { LaenComponent } from '../matrixLaen/matrixLaen.component';
import { MaksevoimComponent } from '../matrixMaksevoim/matrixMaksevoim.component';
import { RentaablComponent } from '../matrixRentaabl/matrixRentaabl.component';
import { StruktComponent } from '../matrixStrukt/matrixStrukt.component';
import { SumComponent } from '../matrixSum/matrixSum.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, EfektComponent, LaenComponent, MaksevoimComponent, RentaablComponent, StruktComponent, SumComponent]
})
export class Tab1PageModule {}

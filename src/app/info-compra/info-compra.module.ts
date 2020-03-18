import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCompraPageRoutingModule } from './info-compra-routing.module';

import { InfoCompraPage } from './info-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCompraPageRoutingModule
  ],
  declarations: [InfoCompraPage]
})
export class InfoCompraPageModule {}

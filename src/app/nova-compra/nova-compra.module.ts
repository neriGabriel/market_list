import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { NovaCompraPageRoutingModule } from './nova-compra-routing.module';

import { NovaCompraPage } from './nova-compra.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  	BrMaskerModule,
  	NovaCompraPageRoutingModule
  ],
  declarations: [NovaCompraPage]
})
export class NovaCompraPageModule {}

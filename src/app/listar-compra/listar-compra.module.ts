import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCompraPageRoutingModule } from './listar-compra-routing.module';

import { ListarCompraPage } from './listar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCompraPageRoutingModule
  ],
  declarations: [ListarCompraPage]
})
export class ListarCompraPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCompraPage } from './listar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCompraPageRoutingModule {}

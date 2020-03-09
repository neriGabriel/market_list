import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaCompraPage } from './nova-compra.page';

const routes: Routes = [
  {
    path: '',
    component: NovaCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaCompraPageRoutingModule {}
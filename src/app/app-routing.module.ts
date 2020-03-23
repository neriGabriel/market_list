import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {path: 'nova-compra', loadChildren: () => import('./nova-compra/nova-compra.module').then( m => m.NovaCompraPageModule)},
  {path: 'listar-compra', loadChildren: () => import('./listar-compra/listar-compra.module').then( m => m.ListarCompraPageModule)},
  {path: 'info-compra', loadChildren: () => import('./info-compra/info-compra.module').then( m => m.InfoCompraPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

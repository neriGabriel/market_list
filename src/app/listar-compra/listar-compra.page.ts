import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/CompraService/compra.service';
import { Utils } from '../../services/Utils'
import { ModalController, LoadingController, NavParams, Platform } from '@ionic/angular';
import { InfoCompraPage } from '../info-compra/info-compra.page';


@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.page.html',
  styleUrls: ['./listar-compra.page.scss'],
})
export class ListarCompraPage implements OnInit {

  ListaCompra = [];
  constructor(public utils: Utils, public compraSerivce : CompraService, public modalController: ModalController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

	    let compras = await this.compraSerivce.getAll2();
      compras.forEach( (compra: any[]) => {
        let arrayComp = {mercado:'', data: '', valorTotal: 0, qtdeItem: 0, mediaItem: 0};
        arrayComp.mercado = compra["mercado"];
        arrayComp.data    = compra["data"];

        let somaCompra = 0;
        let qtdeItens = 0;
        compra["itens"].forEach(item => {
          somaCompra = Number(somaCompra) + Number(this.utils.acertaMoeda(item.valor));

          qtdeItens++;
        });
        arrayComp.valorTotal = somaCompra;
        arrayComp.qtdeItem = qtdeItens;
        arrayComp.mediaItem = Number(somaCompra) / Number(qtdeItens);
        this.ListaCompra.push(arrayComp);
      });
  }
 async abreModal(Compra) {
   const modal = await this.modalController.create({
       component: InfoCompraPage,
       componentProps: Compra
   });
  modal.onDidDismiss()
  .then( (res) => {
    console.log('teste');
  })
  return await modal.present();
 }

}

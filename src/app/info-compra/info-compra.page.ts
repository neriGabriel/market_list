import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';
import { CompraService } from '../../services/CompraService/compra.service';
import { Utils } from '../../services/Utils'

@Component({
  selector: 'app-info-compra',
  templateUrl: './info-compra.page.html',
  styleUrls: ['./info-compra.page.scss'],
})
export class InfoCompraPage implements OnInit {

  public vCompra : {};
  public vMercado : '';
  public vData    : '';
  public vValorTotal : 0;
  public vQtdeItem  : 0;
  public vMediaItem : 0;

  constructor(public modalController: ModalController, public navParams: NavParams, public compraService: CompraService, public utils: Utils) { }

  async ngOnInit() {
    this.vMercado   =  this.navParams.get('mercado');
    this.vData      =  this.navParams.get('data');
    this.vValorTotal =  this.navParams.get('valorTotal');
    this.vQtdeItem =  this.navParams.get('qtdeItem');
    this.vMediaItem =  this.navParams.get('mediaItem');

    this.vCompra =  await this.compraService.findByMercadoDataLancamento(this.vMercado , this.vData);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}

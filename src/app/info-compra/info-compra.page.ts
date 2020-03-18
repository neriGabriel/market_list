import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-info-compra',
  templateUrl: './info-compra.page.html',
  styleUrls: ['./info-compra.page.scss'],
})
export class InfoCompraPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}

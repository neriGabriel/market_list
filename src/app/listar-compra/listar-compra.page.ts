import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/CompraService/compra.service';
import { Utils } from '../../services/Utils'

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.page.html',
  styleUrls: ['./listar-compra.page.scss'],
})
export class ListarCompraPage implements OnInit {
  
  ListaCompra = [];
  constructor(public utils: Utils, public compraSerivce : CompraService) { }

  ngOnInit() {
  }
  
  async ionViewWillEnter() {
	  await this.compraSerivce.getAll()
	  .then((response: any[]) => {
		  this.ListaCompra = response
	  })
	  .catch((error) => {
          console.log("ERROR");
      });
    }
    
	
}

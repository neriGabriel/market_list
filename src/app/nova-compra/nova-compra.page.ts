import { Component, OnInit } from '@angular/core';

import { Utils } from '../../services/Utils'
import { CompraService } from '../../services/CompraService/compra.service';

@Component({
  selector: 'app-nova-compra',
  templateUrl: './nova-compra.page.html',
  styleUrls: ['./nova-compra.page.scss'],
})

export class NovaCompraPage implements OnInit {

  formCompra = {
	  mercado: '',
	  item: '',
	  valor: ''
  };

  constructor(public utils: Utils, public compraSerivce : CompraService) { }

  ngOnInit() {}

  async adicionarItem() {
	  let { mercado, item, valor } = this.formCompra;
	  let data = this.utils.acertaData(new Date(), 0);
	  let compraItem   = [];
    let isCompra = true;
	  await this.compraSerivce.getAll()
	  .then((response: any[]) => {
      if(response != null && response != undefined && response.length > 0) {
        response.forEach(compra => {
            if(compra.mercado == mercado) {
              compra.itens.push({
                  "item": item,
                  "valor": valor
                });
                isCompra = false;
              return;
            }
        });
      }
      if (isCompra) {
        let item123 = {
          "mercado": mercado,
            "data": data,
            "itens": [
              {
            "item": item,
            "valor": valor
          }
        ]
        };
        response.push(item123);
      }
      compraItem = response;
	  });

	  await this.compraSerivce.insert(JSON.stringify(compraItem))
	  .then((msg) => console.log('SUCESSO'))
	  .catch((msg) => console.log('ERROR'))
  }
}

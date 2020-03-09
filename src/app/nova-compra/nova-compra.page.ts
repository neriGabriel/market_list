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
	  
	  await this.compraSerivce.getAll()
	  .then((response: any[]) => {
	      compraItem = response;
	  });
	  
	  let compraMercado =  await this.compraSerivce.findByMercadoDataLancamento(mercado, data);
	  
	
	  if(compraMercado == undefined) {
	  	compraMercado = {
			  "mercado": mercado,
		  	  "data": data,
		  	  "itens": [
		  	  	{
					"item": item,
					"valor": valor
				}
		  	  ]
	  	};
 	  } else {
		  compraMercado["itens"].push({
					"item": item,
					"valor": valor
				});
				
	      			
	  }
	  compraItem.push(compraMercado);
	  
	  
	  await this.compraSerivce.insert(JSON.stringify(compraItem))
	  .then((msg) => console.log('SUCESSO'))
	  .catch((msg) => console.log('ERROR'))
  }	
}

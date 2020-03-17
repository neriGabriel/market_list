import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  jsonCompra = '[]';
  constructor(public storage: Storage) {
	  this.initCompra()
	  .then((msg) => console.log('SUCESSO ao iniciar cookies de compra. MSG: '+msg))
	  .catch((msg) => console.log('ERRO ao iniciar cookies de compra. MSG: '+msg));
  }

  private initCompra() {
  	return new Promise((resolve, reject) => {
  	  this.storage.get('compra')
  	  .then((val) => {
  	     if (val == null) {
  	              this.storage.set('compra', '[]');
  	              this.jsonCompra = '[]';
  	     } else {
  	              this.jsonCompra = val;
  	     }
  	     resolve(true);
  	  }).catch((error) => {
  	     reject(false);
  	  });
  	});
  }

  getAll() {
      return new Promise((resolve, reject) => {
        this.storage.get('compra').then((val) => {
          let jsonCompra = JSON.parse(val);
          resolve(jsonCompra);
        })
          .catch((erro) => {
            reject(erro + 'Erro ao selecionar dados da(s) compra(s)');
          });
      });
    }

  insert(encodedCompra) {
      return new Promise((resolve, reject) => {
        this.storage.get('compra').then(() => {
          this.jsonCompra = encodedCompra;
          if (this.jsonCompra != null) {
            this.storage.set('compra', this.jsonCompra);
          }
          this.jsonCompra = '[]';
          resolve(true);
        }).catch((error) => {
          reject(false);
        });
      });
  }

  async findByMercadoDataLancamento(mercado, data) {
	  let compra = {};
	  await this.getAll().then((response: any[]) => {
	      compra = response.find(Compra => Compra.mercado == mercado && Compra.data == data);
	  });
	  return compra;
  }


  async getAll2(): Promise<[]> {
    let teste = await this.storage.get('compra');
    return JSON.parse(teste);
  }
}

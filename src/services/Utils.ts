import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class Utils {
    constructor() {}
	
	/*
	 * @params: data => E.G => new Date().toISOString();
	 * @params: tipo => 0: YYYY-MM-DD, 1: DD/MM/YYYY;
	 */
	acertaData(data, tipo = 0) {
		if(this.isEmpty(data)) {
			console.log('Data não especificada corretamente');
			return false;
		}
		
    	return (tipo === 0) ? moment(data).format("YYYY-MM-DD") : moment(data).format("DD/MM/YYYY");	
	}
	
	isEmpty(str) {
		return (str == '' || str == undefined || typeof str == "undefined" || str.length == 0) ? true : false;
	}
}
import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Product } from '../model/product';
import { BaseService } from '../service/base.service';

import { Observable }     from 'rxjs/Observable';


@Injectable()
export class ProductService extends BaseService {
    
    private url = '/webshop2/products'; 
  
    constructor (private http: Http) {
        super();
    } 
  
    getProduct(id: number): Observable<Product> {
        return this.http.get(this.url + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError); 
    }
    
    getProducts(): Observable<Product[]> {
        return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError); 
    }
    
    saveProduct(product: Product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, product, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
        
}

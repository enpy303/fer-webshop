import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { Order } from '../model/order';

import { ProductService } from '../service/product.service';
import { OrderService } from '../service/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-cart',
    templateUrl: 'cart.component.html' 
})
export class CartComponent implements OnInit {
    
    errorMessage: string;
    order: Order;
    
    constructor(
            private productService: ProductService,
            private orderService: OrderService,
            private route: ActivatedRoute,
            private router: Router ) {
        
            this.order = new Order();
            this.order.products = new Array();
        }

        ngOnInit() {
            this.addProduct( this.route.snapshot.params['id'] );
        }
        
        addProduct( id: number ) {
            this.orderService.addProduct( id, this.order )
                .subscribe(
                    data => this.order = data,
                    error => this.errorMessage = error );
        }
        
        getTotal(){
            let retVal = 0;
            for (let product of this.order.products) {
                retVal += product.price;
            }
            return retVal;
        }
 
}

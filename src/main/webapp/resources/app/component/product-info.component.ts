import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component( {
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'product-info.component.html'
})
export class ProductInfoComponent implements OnInit {

    product = new Product();
    errorMessage: string;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router ) {
    }

    ngOnInit() {
        this.getProduct( this.route.snapshot.params['id'] );
    }

    getProduct( id: number ) {
        this.productService.getProduct( id )
            .subscribe(
            data => this.product = data,
            error => this.errorMessage = error );
    }

    isAvailable( product: Product ) {
        return product.quantity > 0 ? 'Available' : 'Out of stock';
    }

}
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

interface Product {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  img: string;
}

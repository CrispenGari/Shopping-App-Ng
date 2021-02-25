import { Component, OnInit } from '@angular/core';

import { ProductsBasketService } from '../../../services/products-basket.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public basketWeight: number = 0;
  constructor(private productsBasketService: ProductsBasketService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.productsBasketService.getBasket().subscribe((basket) => {
        this.basketWeight = basket.length;
      });
    }, 200);
  }
}

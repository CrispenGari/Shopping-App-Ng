import { Component, OnInit } from '@angular/core';
import { ProductsBasketService } from '../../../services/products-basket.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  public products: Product[] = [];
  public totalProducts: number = 0;
  public totalPrice: any = 0;
  public arrayProduct: any[] = [];
  constructor(private productsBasketService: ProductsBasketService) {}
  ngOnInit(): void {
    setInterval(() => {
      this.productsBasketService.getBasket().subscribe((products) => {
        this.products = products;
      });
      this.totalPrice = 0;
      this.totalProducts = this.products.length;
      this.products.forEach((product) => {
        this.totalPrice += product.price;
      });
    }, 200);
  }
  clearBasket() {
    this.productsBasketService.emptyBasket().subscribe((ob) => {
      console.log(ob);
      console.clear();
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

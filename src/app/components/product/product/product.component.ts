import { Component, OnInit, Input } from '@angular/core';
import { ProductsBasketService } from '../../../services/products-basket.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() public product: any;
  constructor(private productsBasketService: ProductsBasketService) {}

  ngOnInit(): void {}
  addToBasket(product: any) {
    const post_data: Product = {
      name: product.name,
      price: product.price,
      img: product.img,
    };
    this.productsBasketService.addToBasket(post_data).subscribe((res) => {
      // update the frontend
      console.log(res);
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

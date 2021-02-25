import { Component, OnInit, Input } from '@angular/core';
import { ProductsBasketService } from '../../../services/products-basket.service';
@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss'],
})
export class BasketProductComponent implements OnInit {
  @Input() public product: any;
  constructor(private productsBasketService: ProductsBasketService) {}
  ngOnInit(): void {}
  removeProduct(product: any) {
    this.productsBasketService.deleteBasketProduct(product).subscribe((res) => {
      console.log(res);
      console.clear();
    });
  }
}

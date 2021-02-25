import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ProductsBasketService {
  public baseUrlGet: string = 'http://localhost:3001/basket';
  public baseUrlPost: string = 'http://localhost:3001/basket/add';
  public baseUrlDelete: string = 'http://localhost:3001/basket/remove/';
  public baseUrlDeleteAll: string = 'http://localhost:3001/basket/remove/all';
  constructor(private http: HttpClient) {}

  getBasket(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlGet);
  }
  addToBasket(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrlPost, product);
  }
  deleteBasketProduct(product: Product): Observable<Product> {
    this.baseUrlDelete = this.baseUrlDelete + product._id;
    return this.http.delete<Product>(this.baseUrlDelete);
  }
  emptyBasket(): Observable<Product> {
    return this.http.delete<Product>(this.baseUrlDeleteAll);
  }
}
interface Product {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  img: string;
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public baseUrl: string = 'http://localhost:3001/products';
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}

interface Product {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  img: string;
}

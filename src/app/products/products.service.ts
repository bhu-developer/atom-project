import { Injectable } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl: string;
  constructor (
    private http: HttpClient,
    private common: CommonService
  ) {
    this.productUrl = this.common.apiUrl + "products/";
   }

  getProducts(): Observable<any> {
    return this.http.get<Products>(this.productUrl);
  }

  addProducts( productData: Products ): Observable<any> {
    return this.http.post<Products>(this.productUrl, productData);
  }

  deleteProducts( id: number ): Observable<any> {
    return this.http.delete(`${this.productUrl}${id}`);
  }

  getSingleProduct( productId: number ): Observable<any> {
    return this.http.get(`${this.productUrl}${productId}`);
  }

  updateProducts( productData: Products, productId: number ): Observable<any> {
    return this.http.put(`${this.productUrl}${productId}`,productData );
  }
}

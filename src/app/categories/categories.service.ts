import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../categories/categories.model';
import { Observable } from 'rxjs';
import { CommonService } from '../shared/common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoryUrl: string;
  constructor (
    private http: HttpClient,
    private common: CommonService
  ) {
    this.categoryUrl = this.common.apiUrl + "categories/";
   }

  getCategories(): Observable<any> {
    return this.http.get<Categories>(this.categoryUrl);
  }

  addCategories( categoryData: Categories ): Observable<any> {
    return this.http.post<Categories>(this.categoryUrl, categoryData);
  }

  deleteCategories( id: number ): Observable<any> {
    return this.http.delete(`${this.categoryUrl}${id}`);
  }

  getSingleCategory( categoryId: number ): Observable<any> {
    return this.http.get(`${this.categoryUrl}${categoryId}`);
  }

  updateCategories( categoryData: Categories, categoryId: number ): Observable<any> {
    return this.http.put(`${this.categoryUrl}${categoryId}`,categoryData );
  }
}

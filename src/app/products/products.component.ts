import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Categories } from '../categories/categories.model';
import { CategoriesService } from '../categories/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dismissible = true;
  products: any; 
  message: string;
  alert: string;
  categories: any;
  subscription:Subscription;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private categoryService:CategoriesService
  ) {
   }
  
  ngOnInit(): void {

    this.message = this.commonService.message;
    this.alert = this.commonService.alert;

    this.fetchAllProducts();
  }

  onDeleteProducts(id: number) {
    if( confirm('Do you want to delete the product ?') ) {
      this.productService.deleteProducts(id).subscribe((res) => {
        this.message = "Product deleted succesfully";
        this.alert = 'alert alert-success';
        this.fetchAllProducts();
      });
    }
  }

  fetchAllProducts() {
    this.productService.getProducts().subscribe(res =>  {
      this.products = res;
    });
  }
}

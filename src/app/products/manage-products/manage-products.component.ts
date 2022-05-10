import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories/categories.service';
import { CommonService } from 'src/app/shared/common.service';
import { Products } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  @ViewChild('productForm') productForm:NgForm;
  message: string;
  alert: string;
  editMode = false;
  formtitle = "Add Product"; 
  btnValue = "Save Product"
  productId: number;
  options: any;
  categories;
  selected: number;
  constructor(
    private productService: ProductsService,
    private activetRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private categoryService: CategoriesService
  ) {  }

  ngOnInit(): void {
    this.commonService.sharedMessage.subscribe(category =>{
      this.categories = category;
    });

    if(!this.categories) {
      this.categoryService.getCategories().subscribe(res => {
        this.categories = res;
      });
    }

    this.productId = this.activetRoute.snapshot.params['id'];
    if( this.productId ) {
      this.editMode = true;
      this.formtitle = "Edit Product"; 
      this.btnValue = "Update Product";
      this.setFormValue();
    }
  }

  onAddProduct(productData: Products){
    if( true == this.editMode  ) {
      this.updateProduct(productData);
    } else {
      this.saveProduct(productData)
    }
  }

  updateProduct(productData: Products) {
    this.productService.updateProducts(productData,this.productId).subscribe( (res) => {
        this.commonService.message = "Update products successfully";
        this.commonService.alert = "success";
        this.router.navigate(['/products']);
      },
      err => {
        this.commonService.message = "Please contact to support";
        this.commonService.alert = 'danger';
      },
    )
  }

  saveProduct(productData: Products) {
    this.productService.addProducts(productData).subscribe( (res) => {
        this.commonService.message = "Add products successfully";
        this.commonService.alert = "success";
        this.router.navigate(['/products' ]);
      },
      err => {
        this.commonService.message = "Please contact to support";
        this.commonService.alert = 'danger';
      },
    )
  }

  setFormValue() {
    this.productService.getSingleProduct(this.productId).subscribe((res) => {
      this.editMode = true;
        this.productForm.setValue({
          name: res.name,
          price:res.price,
          category: res.category
        });

        this.selected = res.category;
     });
  }
}

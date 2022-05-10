import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ]
})
export class ProductsModule { }

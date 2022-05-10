import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
    AlertModule.forRoot()
  ]
})
export class CategoriesModule { }

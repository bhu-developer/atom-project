import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonService } from './shared/common.service';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [CommonService,CategoriesService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

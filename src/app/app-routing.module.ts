import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { 
    path: 'categories', 
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) 
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

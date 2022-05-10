import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dismissible = true;
  categories: any; 
  message: string;
  alert: string;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {
   }
  
  ngOnInit(): void {
    this.commonService.sharedMessage.subscribe(message =>console.log(message));

    this.message = this.commonService.message;
    this.alert = this.commonService.alert;

    this.fetchAllCategories();
  }

  onDeleteCategories(id: number) {
    if( confirm('Do you want to delete the category?') ) {
      this.categoriesService.deleteCategories(id).subscribe((res) => {
        this.message = "Category deleted succesfully!!";
        this.alert = 'alert alert-success';
        this.fetchAllCategories();
      });
    }
  }

  fetchAllCategories() {
    this.categoriesService.getCategories().subscribe(res =>  {
      this.categories = res;
      this.commonService.nextMessage(res);
    });
  }
}

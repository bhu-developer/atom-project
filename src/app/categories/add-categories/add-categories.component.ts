import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { Categories } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
 
  @ViewChild('categoryForm') categoryForm:NgForm;
  message: string;
  alert: string;
  editMode = false;
  formtitle = "Add Category"; 
  btnValue = "Save Category"
  categoryId: number;

  constructor(
    private categoryService: CategoriesService,
    private activetRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.categoryId = this.activetRoute.snapshot.params['id'];
    if( this.categoryId ) {
      this.editMode = true;
      this.formtitle = "Edit Category"; 
      this.btnValue = "Update Category";
      this.setFormValue();
    }
  }

  onAddCategory(categoryData: Categories){
    if( true == this.editMode  ) {
      this.UpdateCategory(categoryData);
    } else {
      this.saveCategory(categoryData)
    }
  }

  UpdateCategory(categoryData: Categories) {
    this.categoryService.updateCategories(categoryData,this.categoryId).subscribe( (res) => {
        this.commonService.message = "Update categories successfully";
        this.commonService.alert = "success";
        this.router.navigate(['/categories']);
      },
      err => {
        this.commonService.message = "Please contact to support";
        this.commonService.alert = 'danger';
      },
    )
  }

  saveCategory(categoryData: Categories) {
    this.categoryService.addCategories(categoryData).subscribe( (res) => {
        this.commonService.message = "Add categories successfully";
        this.commonService.alert = "success";
        this.router.navigate(['/categories' ]);
      },
      err => {
        this.commonService.message = "Please contact to support";
        this.commonService.alert = 'danger';
      },
    )
  }

  setFormValue() {
    this.categoryService.getSingleCategory(this.categoryId).subscribe((res) => {
      console.log(res.name);
      this.editMode = true;
        this.categoryForm.setValue({
          name: res.name
        });
     });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-award-category',
  templateUrl: './award-category.component.html',
  styleUrls: ['./award-category.component.scss'],
})
export class AwardCategoryComponent implements OnInit {
  breadcrumb: any[] = [
    {
      title: 'Award Category',
      subTitle: 'Masters',
    },
  ];

  turnover: any = [];

  awardCategoryForm = this.fb.group({
    award_title: ['', Validators.required],
    turnover_id: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private apiservice: ApiService) {}

  ngOnInit(): void {}

  onSubmit(form) {}

  // get turnover

  getTurnover() {
    this.apiservice.getTurnover().subscribe((res: any) => {
      console.log(res);
      this.turnover = res.data;
    });
  }
}

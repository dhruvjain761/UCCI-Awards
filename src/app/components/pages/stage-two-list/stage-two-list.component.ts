import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Table } from 'primeng/table';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-stage-two-list',
  templateUrl: './stage-two-list.component.html',
  styleUrls: ['./stage-two-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class StageTwoListComponent implements OnInit {
  @ViewChild('dt1') dt1: Table;
  @ViewChild('dt2') dt2: Table;
  breadcrumb: any[];

  filterVal: string;

  loading: boolean = false;

  users: any = [];

  displayMaximizable: boolean = false;

  details: any;

  statusModal: boolean = false;

  id: number;

  preYear: any;

  currentYear: any;

  date: Date = new Date();
  currncyLength = 0;
  // <<<<<<< HEAD
  //   currency;
  // =======
  //   currency
  // >>>>>>> 79b965bb3f33b39ee216fc353fe076e480be689d

  statusForm = this.fb.group({
    status: ['', Validators.required],
    remark: ['', Validators.required],
  });
  status: string;
  localStorage: any;
  selectedUser: any[] = [];
  turnoverAmount: string;
  // emailBoolean: boolean = false;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private commonFunction: CommonClass,
    private confirmationService: ConfirmationService,
    private formService: FormBuilderService,
    private route: Router,
    private _formBuilder : FormBuilderService
  ) {}

  async ngOnInit() {
    this.spinner.show();
    this.localStorage = this.commonFunction.getLocalStorage();
    this.getUsers();
    this.breadcrumb = [
      {
        title: 'Stage Two',
        subTitle: 'Home',
      },
    ];
    if(this.localStorage.role == 'Admin') {
      await this._formBuilder.getAPI('response/allData').then((res:any)=> {
        this.spinner.hide();
        console.log(res);
        this.users = res?.data;
      })
    }
    this.currentYear = this.date.getFullYear();
    this.preYear = this.currentYear - 1;
  }

  // get All registered users

  getUsers() {
    // this.apiService.getRegisteredUsers().subscribe((res: any) => {
    //   console.log(res);
    //   let users: any = res.data;
    //   this.users = users.reverse();
    // });
      this.formService.getAPI('formData').then((res: any) => {
        this.users = res?.data;
        console.log(this.users);
        this.spinner.hide();
      });
  }

  // On edit form Press
  editForm(slug, status,company_name, res_id) {
    // console.log(i);
    if (status != 'completed') {
      // let array = this.users.filter(x => x.award_category == category && x.status == "In Progress");
      // let routeIndex:any = 0;
      // array.forEach((form:any, index:any) => {
      //   if(form.company_name == company_name && slug == form.slug) {
      //     routeIndex = index;
      //     console.log("routeIndex",routeIndex)
      //   }
      // });
      // if(status == "") {
      //   routeIndex = 0;
      // }
      // else {

      // }
      // console.log(array);
      localStorage.setItem('company',company_name);
      localStorage.setItem('res_id',res_id);
      this.route.navigateByUrl(`/form-lib/${slug}`);
    }
    // localStorage.setItem('companyName', name);
  }

  // search function

  onSearch(type: string, e: any) {
    // if(type == "dt1") {
    this.dt1.filterGlobal(e, 'contains');
    // }else if(type == "dt1") {
    //   this.dt1.filterGlobal(e, 'contains')
    // }
  }

  // Clear search filter
  reset() {
    this.dt1.reset();
    this.filterVal = '';
  }
}

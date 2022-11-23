import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class DashboardComponent implements OnInit {
  localStorage: any;
  userName: any;
  membershipData: any;
  displayPopUp: boolean = false;
  status: any;
  awardForm: any;

  constructor(
    private commonFunction: CommonClass,
    private NgxSpinnerService: NgxSpinnerService,
    private ApiServices: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private Route: Router,
    private formResponseService: FormBuilderService
  ) {}

  ngOnInit() {
    // this.NgxSpinnerService.show();

    this.localStorage = this.commonFunction.getLocalStorage();
    let localStorage = this.commonFunction.getLocalStorage();
    this.userName = localStorage.username;
    // this.getMembershipStatus();
    this.getFormResponse();
  }
  getFormResponse() {
    this.formResponseService.getAPI('formData').then((res: any) => {
      this.awardForm = res.data;
      console.log(this.awardForm);
    });
  }
  breadcrumb = [
    {
      title: 'Howdy, Andy!',
      subTitle: 'Dashboard',
    },
  ];

  event(e) {
    console.log(e);
  }

  getMembershipStatus() {
    // this.ApiServices.getregularMemberList().subscribe((res: any) => {
    //   this.membershipData = res.data;
    //   console.log(res);
    //   this.status = res.data.flag;
    //   console.log(this.status);
    //   this.NgxSpinnerService.hide();
    //   console.log(this.membershipData);
    // });
  }
  onpayment(item) {
    console.log(item);
    this.displayPopUp = true;

    let memberId: number = item.id;
    let typeId: number = item.membership_type_id;
    // console.log(obj, memberId, typeId);

    this.confirmationService.confirm({
      message: 'Do you want to change details',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.NgxSpinnerService.show();
        // this.messageService.add({
        //   severity: 'info',
        //   summary: 'Confirmed',
        //   detail: 'You have accepted',
        // });
        let obj = {
          discrepancies: true,
        };
        // this.ApiServices.renew(obj, memberId, typeId).subscribe((res: any) => {
        //   console.log('res', res);
        //   this.NgxSpinnerService.hide();
        //   this.Route.navigateByUrl('/');
        // });
      },
      reject: () => {
        this.NgxSpinnerService.show();
        let obj = {
          discrepancies: false,
        };
        // this.ApiServices.renew(obj, memberId, typeId).subscribe((res: any) => {
        //   console.log('res', res);
        //   this.NgxSpinnerService.hide();
        // });
      },
    });
  }
}

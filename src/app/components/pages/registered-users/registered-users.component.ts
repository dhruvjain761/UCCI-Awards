import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class RegisteredUsersComponent implements OnInit {
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
  currency

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
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getUsers();
    this.localStorage = this.commonFunction.getLocalStorage();
    this.breadcrumb = [
      {
        title:
          this.localStorage.role == 'User'
            ? 'My Registrations'
            : 'Registered Users',
        subTitle: 'Home',
      },
    ];
    this.currentYear = this.date.getFullYear();
    this.preYear = this.currentYear - 1;
  }

  // get All registered users

  getUsers() {
    this.apiService.getRegisteredUsers().subscribe((res: any) => {
      console.log(res);
      let users: any = res.data;
      this.users = users.reverse();
      this.spinner.hide();
    });
  }

  // Clear search filter
  reset(dt1) {
    dt1.reset();
    this.filterVal = '';
  }

  // On Approve presss

  onAprrovPress(item: any, status: string) {
    if (item.status === 'Pending') {
      this.id = item.id;
      this.status = status;
      // this.statusModal = true;
      let approvedId = [];
      this.confirmationService.confirm({
        message: 'Are you sure you want to approve this application?',
        accept: () => {
          this.spinner.show();
          let id = this.id;
          approvedId.push({ id });

          console.log(approvedId);

          let obj: any = {
            // queue_approval: true,
            award_registrations: approvedId,
            status: 'Approved',
          };
          console.log(obj);

          this.apiService.updateStatus(obj).subscribe((res: any) => {
            console.log(res);
            this.selectedUser = [];
            this.spinner.hide();
            this.messageService.add({
              severity: 'success',
              detail: res.message,
            });
            this.getUsers();
          });
        },
      });
    }

    if (status === 'approve') {
      this.statusForm.controls['remark'].clearValidators();
      this.statusForm.controls['remark'].updateValueAndValidity();
    }
  }

  statusUpdate(form) {
    if (this.status === 'approve') {
      this.statusForm.patchValue({
        status: 'Approved',
      });
    } else if (this.status === 'reject') {
      this.statusForm.patchValue({
        status: 'Rejected',
      });
    }
    // debugger;
    console.log(this.statusForm.valid);

    if (this.statusForm.valid) {
      let rejectObj = {
        award_registrations: [{ id: this.id }],
        status: this.statusForm.value.status,
        remark: this.statusForm.value.remark,
      };
      this.spinner.show();
      this.apiService.updateStatus(rejectObj).subscribe((res: any) => {
        console.log(res);
        this.statusModal = false;
        form.resetForm();
        this.getUsers();
        this.spinner.hide();
        this.messageService.add({
          severity: 'success',
          detail: res.message,
        });
      });
    } else if (this.statusForm.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'Please fill all details',
      });
    }
  }

  // On Reject Press

  onRejectPress(item: any, status: string) {
    if (item.status === 'Pending') {
      this.id = item.id;
      this.status = status;
      this.statusModal = true;
    }
    if (status === 'reject') {
      this.statusForm.controls['remark'].setValidators(Validators.required);
      this.statusForm.controls['remark'].updateValueAndValidity();
    }
    // this.apiService.updateStatus(item.id, obj).subscribe((res: any) => {
    //   console.log(res);
    // });
  }

  onViewPress(item: any) {
    console.log(item);
    let selectedUser = [];
    selectedUser.push(item);
    this.details = selectedUser;

    let a = item.turnover;
    a = a.replace(/,/g, "");
    console.log('updated ', a);
    if (a && !isNaN(+a)) {
      let num: number = +a;
      let temp = new Intl.NumberFormat("en-IN").format(num); //inplace of en-IN you can mention your country's code
      console.log("temp is   ", temp);
      temp = temp ? temp.toString() : '';
      console.log("temp is updated ", temp);
      this.currency.setValue(temp);
      this.turnoverAmount = temp;
      console.log(this.turnoverAmount);
      
    }

    this.displayMaximizable = true;

    console.log(this.details);
  }

  // Email sending function

  onMailSentPress(item: any) {
    console.clear();
    console.log(item);
  }

  // Approve in bulk

  bulkApproval() {
    // debugger;
    if (this.selectedUser.length !== 0) {
      // let approvalObj = [
      //   award_registrations: [{
      //     id: 1
      //   }]
      // ]
      let approvedId = [];
      this.selectedUser.forEach((element) => {
        if (element.status !== 'Approved' && element.status !== 'Rejected') {
          console.log(element);
          var id = element.id;
          approvedId.push({ id });
        }
      });
      this.confirmationService.confirm({
        message: 'Are you sure you want to approve selected users?',
        accept: () => {
          this.spinner.show();

          console.log(approvedId);

          let obj: any = {
            // queue_approval: true,
            award_registrations: approvedId,
            status: 'Approved',
          };
          console.log(obj);

          this.apiService.updateStatus(obj).subscribe((res: any) => {
            console.log(res);
            this.selectedUser = [];
            this.getUsers();
            this.spinner.hide();
            this.messageService.add({
              severity: 'success',
              detail: res.message,
            });
          });
        },
        // reject: ()
      });
    } else if (this.selectedUser.length === 0) {
      this.messageService.add({
        severity: 'error',
        // summary: 'Error',
        detail: 'Please select at least one field',
      });
    }
    // this.apiService.postBulkApproval()
  }

  // Bulk reject
  bulkReject() {
    // debugger;
    if (this.selectedUser.length !== 0) {
      // let approvalObj = [
      //   award_registrations: [{
      //     id: 1
      //   }]
      // ]
      let approvedId = [];
      this.confirmationService.confirm({
        message: 'Are you sure you want to reject selected users?',
        accept: () => {
          this.spinner.show();
          this.selectedUser.forEach((element) => {
            if (
              element.status !== 'Approved' &&
              element.status !== 'Rejected'
            ) {
              var id = element.id;
              approvedId.push({ id });
            }
          });

          console.log(approvedId);

          let obj: any = {
            // queue_approval: true,
            award_registrations: approvedId,
            status: 'Rejected',
          };
          console.log(obj);

          this.apiService.updateStatus(obj).subscribe((res: any) => {
            console.log(res);
            this.selectedUser = [];
            this.spinner.hide();
            this.messageService.add({
              severity: 'success',
              detail: res.message,
            });
            this.getUsers();
          });
        },
        // reject: ()
      });
    } else if (this.selectedUser.length === 0) {
      this.messageService.add({
        severity: 'error',
        // summary: 'Error',
        detail: 'Please select at least one field',
      });
    }
    // this.apiService.postBulkApproval()
  }

  // Bulk email sending function

  sendEmail(string: string, item: any) {
    var emailBoolean: any = true;
    if (string === 'bulk') {
      if (this.selectedUser.length !== 0) {
        // let approvalObj = [
        //   award_registrations: [{
        //     id: 1
        //   }]
        // ]
        let approvedId = [];
        this.selectedUser.forEach((element) => {
          if (element.status == 'Pending' || element.status == 'In Progress') {
            // debugger;
            emailBoolean = false;
            // return this.emailBoolean;
          } else {
            var id = element.id;
            approvedId.push({ id });
            // this.emailBoolean = true;
          }
        });
        console.log(emailBoolean);
        // debugger;
        if (emailBoolean == false) {
          this.spinner.hide();
          this.selectedUser = [];
          this.messageService.add({
            severity: 'warn',
            detail: 'Make sure status should be approved',
          });
        } else if (emailBoolean === true) {
          this.confirmationService.confirm({
            message: 'Are you sure you want to send mail to selected users?',
            accept: () => {
              this.spinner.show();
              console.log(approvedId);

              let obj: any = {
                // queue_approval: true,
                emails: approvedId,
              };
              console.log(obj);

              this.apiService.postBulkApproval(obj).subscribe((res: any) => {
                console.log(res);
                this.selectedUser = [];
                this.spinner.hide();
                this.messageService.add({
                  severity: 'success',
                  detail: res.message,
                });
                this.getUsers();
              });
            },
            // reject: ()
          });
        }
      } else if (this.selectedUser.length === 0) {
        this.messageService.add({
          severity: 'error',
          // summary: 'Error',
          detail: 'Please select at least one field',
        });
      }
    } else if (string === 'single') {
      if (item.status === 'Approved' || item.status === 'Rejected') {
        let approvedId = [];
        this.confirmationService.confirm({
          message: 'Are you sure you want to send mail to selected users?',
          accept: () => {
            this.spinner.show();
            let id = item.id;
            approvedId.push({ id });

            console.log(approvedId);

            let obj: any = {
              // queue_approval: true,
              emails: approvedId,
            };
            console.log(obj);

            this.apiService.postBulkApproval(obj).subscribe((res: any) => {
              console.log(res);
              this.selectedUser = [];
              this.spinner.hide();
              this.messageService.add({
                severity: 'success',
                detail: res.message,
              });
              // this.getUsers();
            });
          },
        });
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss'],
  providers: [MessageService],
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

  statusForm = this.fb.group({
    status: ['', Validators.required],
    remark: ['', Validators.required],
  });
  status: string;
  localStorage: any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private commonFunction: CommonClass
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
  }

  // get All registered users

  getUsers() {
    this.apiService.getRegisteredUsers().subscribe((res: any) => {
      console.log(res);

      this.users = res.data;
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
      this.statusModal = true;
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
    if (this.statusForm.valid) {
      this.spinner.show();
      this.apiService
        .updateStatus(this.id, this.statusForm.value)
        .subscribe((res: any) => {
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

    this.displayMaximizable = true;

    console.log(this.details);
  }
}

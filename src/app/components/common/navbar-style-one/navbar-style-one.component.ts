import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NavbarStyleOneComponent implements OnInit, OnChanges {
  signUpSubmitted = false;
  submitted = false;
  resSignupMsg: string = '';
  resSignupMsgCheck: string = ' ';
  resSigninMsgCheck: string = ' ';
  resSigninMsg: string = ' ';
  loginobj: any;
  loggedIn: boolean = false;
  userName: string = '';
  userEmail: string = '';
  resData: any = {};
  localStorage: any;

  spinnerMsg: string;
  role: any;
  otherOptionClass: string = 'container';
  awardForm: any = [];
  menuItems: any = [];
  // confirmPassword: string = '';
  constructor(
    private apiservice: ApiService,
    private router: Router,
    private messageService: MessageService,
    private commonFunction: CommonClass,
    private spinner: NgxSpinnerService // private _formBuilder: FormBuilderService
  ) {}

  ngOnInit() {
    // this.localStorage = '';
    // debugger;
    this.localStorage = this.commonFunction.getLocalStorage();
    console.log(this.localStorage);

    console.log(this.localStorage);
    if (localStorage.getItem('award_access_token')) {
      this.role = JSON.parse(localStorage.getItem('award_access_token')).role;
    }
    // save user name or email in localstorage
    var award_access_token = localStorage.getItem('award_access_token');
    if (award_access_token && award_access_token != 'undefined') {
      this.userName = JSON.parse(
        localStorage.getItem('award_access_token')
      ).username;
      this.userEmail = JSON.parse(
        localStorage.getItem('award_access_token')
      ).useremail;

      this.apiservice.getDropdownName().subscribe((res: any) => {
        console.log(res);
        this.menuItems = res.data;
      });
    }
  }

  onLogoClick() {
    // this.router.navigateByUrl('/');
    if (this.localStorage == undefined) {
      // debugger;
      // this.role = JSON.parse(localStorage?.getItem('award_access_token')).role;
      // this.router.navigateByUrl('/');
      window.location.reload();
    }
  }
  ngOnChanges() {
    // this.localStorage = this.commonFunction.getLocalStorage();
  }

  // async getMenu() {
  //   await this.apiservice.getDropdownName().then((res: any) => {
  //     console.log(res);
  //     this.awardForm = res.data;
  //   });

  // this._formBuilder.getAPI('formData').subscribe((res: any) => {
  //   this.awardForm = res.data;
  //   console.log(this.awardForm);
  // });
  // }
  // sign up form controls
  registerForm = new FormGroup({
    signupname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
    ]),
    signupemail: new FormControl('', [Validators.required]),
    signuppassword: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  // user sign up function
  signUp() {
    this.signUpSubmitted = true;
    this.spinnerMsg = 'Signing up';
    this.spinner.show();
    let formData = new FormData();

    if (this.registerForm.valid) {
      let data = this.registerForm.value;
      formData.append('name', data.signupname);
      formData.append('email', data.signupemail);
      formData.append('password', data.signuppassword);
      formData.append('password_confirmation', data.confirmpassword);
      this.apiservice.register(formData).subscribe(
        (res) => {
          // console.log(res);
          this.resSignupMsgCheck = 'success';
          this.resSignupMsg = res.message;

          this.saveAccessToken(res);

          this.spinner.hide();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User Singned up successfully!',
          });

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          // console.log(error);
          this.spinner.hide();
          // if (error.status == 400) {
          //   if (error.error.email) {
          //     this.messageService.add({
          //       severity: 'error',
          //       summary: 'error',
          //       detail: error.error.email
          //     });
          //   }
          //   if (error.error.password) {
          //     this.messageService.add({
          //       severity: 'error',
          //       summary: 'error',
          //       detail: error.error.password
          //     });
          //   }
          //   this.resSignupMsgCheck = 'danger';
          //   console.log(this.resSignupMsg);
          // }
        }
      );
    }
  }

  // sign in form controls
  loginForm = new FormGroup({
    loginemail: new FormControl('', [Validators.required]),
    loginpassword: new FormControl('', [Validators.required]),
  });

  // user login form function
  loginIn() {
    this.submitted = true;
    this.spinnerMsg = 'Loging In';
    this.spinner.show();
    if (this.loginForm.valid) {
      let localStorageData: any = {};
      let data = Object.assign({}, this.loginForm.value);
      this.loginobj = {
        email: data.loginemail,
        password: data.loginpassword,
      };

      this.apiservice.login(this.loginobj).subscribe(
        (res: any) => {
          this.resData = res;
          if (res.error) {
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'error',
            //   detail: res.error,
            // });
            this.spinner.hide();
          } else {
            this.spinner.hide();
            this.messageService.add({
              severity: 'success',
              // summary: 'Success',
              detail: 'User logged in successfully!',
            });

            this.saveAccessToken(res);
            document.getElementById('close_btn').click();
            this.localStorage = this.commonFunction.getLocalStorage();
            // console.log('local storage : ', this.localStorage.role);

            if (this.localStorage.role == 'Admin')
              this.router.navigateByUrl('/dashboard');
            else if (this.localStorage.role != 'Admin')
              this.router.navigateByUrl('/');
            setTimeout(() => {
              // window.location.reload();
            }, 1000);
          }

          // this.router.navigateByUrl('/index-2');
          // this.loggedIn = true;
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          // if (error.status == 400) {
          // if (error.error?.email) {
          //   this.resSigninMsg = error.error.email[0];
          //   this.spinner.hide();
          // console.log(this.resSigninMsg, error.error.email[0]);
          // } else if (error.error?.password) {
          //   this.spinner.hide();
          //   this.resSigninMsg = error.error.password[0];
          // }
          // if (error.error?.message) {
          //   this.spinner.hide();
          //   this.resSigninMsg = error.error.message;
          // }
          // this.resSigninMsgCheck = 'danger';
          // this.spinner.hide();
          // this.messageService.add({
          //   severity: 'error',
          //   summary: 'error',
          //   detail: this.resSigninMsg,
          // });
          // }
        }
      );
      // this.loginForm.reset()
    }
  }

  // convenience getter for easy access to form fields for register form
  get f() {
    return this.registerForm.controls;
  }
  // convenience getter for easy access to form fields for login form
  get g() {
    return this.loginForm.controls;
  }
  // logout function
  logout() {
    // console.log(localStorage.getItem('award_access_token'));
    this.spinner.show();
    this.spinnerMsg = 'Loging Out';
    localStorage.removeItem('award_access_token');
    this.messageService.add({
      severity: 'success',
      // summary: 'success',
      detail: 'Logged out successfully',
    });
    this.userName = '';
    this.localStorage = this.commonFunction.getLocalStorage();
    this.spinner.hide();
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1000);
    // this.router.navigateByUrl('/');

    // this.apiservice.logoutUser().subscribe(
    //   (res: any) => {
    //     localStorage.removeItem('award_access_token');
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'success',
    //       detail: res.message,
    //     });
    //     this.spinner.hide();
    //     this.router.navigateByUrl('/');
    //     this.userName = '';
    //     this.localStorage = this.commonFunction.getLocalStorage();
    //   },
    // (error: any) => {
    //   this.spinner.hide();
    // if(error=='Unauthenticated.')
    //  {
    //   localStorage.removeItem('award_access_token');
    //  }
    // console.log(error)
    // }
    // );
    // localStorage.clear();
  }

  saveAccessToken(res: any) {
    var localStorageData = {
      award_access_token: res.award_access_token,
      username: res.user.name,
      useremail: res.user.email,
      role: res?.role[0],
    };
    localStorage.setItem(
      'award_access_token',
      JSON.stringify(localStorageData)
    );
    // localStorage.setItem("user_credentials", JSON.stringify(this.loginobj))
    this.userName = res.user.name;
  }
}

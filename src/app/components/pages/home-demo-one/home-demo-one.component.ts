import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-demo-one',
  templateUrl: './home-demo-one.component.html',
  styleUrls: ['./home-demo-one.component.scss'],
})
export class HomeDemoOneComponent implements OnInit {
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

  awardTypeValue: string = 'excellence';

  turnover: any = [];

  classification: any = [];

  service: any = [];

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    mobile_no: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    company_name: ['', Validators.required],
    company_GST: [''],
    company_PAN: ['', Validators.required],
    company_state: ['', Validators.required],
    company_city: ['', Validators.required],
    company_pincode: ['', Validators.required],
    company_address: ['', Validators.required],
    award_type: [null, Validators.required],
    gst_type: [null, Validators.required],
    classification_id: [null, Validators.required],
    turnover_id: [null, Validators.required],
    category: [''],
  });
  blankEmailState: boolean;
  classificationState: boolean = false;
  serviceState: boolean = false;
  turnoverState: boolean = false;
  state: any = [];
  selectedState: string;
  type: any;
  required: boolean;
  gstType: any;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private apiservice: ApiService,
    private commonFunction: CommonClass,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.registerForm.get('company_GST').setValidators([Validators.required]);
    if (localStorage.getItem('access_token')) {
      this.role = JSON.parse(localStorage?.getItem('access_token')).role;
    }
    console.log(this.role);

    // save user name or email in localstorage
    var access_token = localStorage.getItem('access_token');
    if (access_token && access_token != 'undefined') {
      this.userName = JSON.parse(localStorage.getItem('access_token')).username;
      this.userEmail = JSON.parse(
        localStorage.getItem('access_token')
      ).useremail;
    }
    console.log(access_token);

    this.localStorage = '';
    this.localStorage = this.commonFunction.getLocalStorage();

    this.getTurnover();
    this.getClassification();
    // this.getServiceType();
    this.getState();
  }

  // user sign up function
  signUp(signupForm) {
    this.signUpSubmitted = true;
    this.spinnerMsg = 'Signing up';

    // console.log(signupForm.submitted);
    console.log(this.registerForm.valid, this.registerForm.value);
    if (this.registerForm.valid) {
      this.spinner.show();
      let formData = new FormData();
      let classification_id: any = this.registerForm.value.classification_id;
      let turnover_id: any = this.registerForm.value.turnover_id;
      let state: any = this.registerForm.value.company_state;
      // classId.push()
      for (const [key, value] of Object.entries(this.registerForm.value)) {
        console.log(key, value);
        if (
          key !== 'classification_id' &&
          key !== 'turnover_id' &&
          key !== 'company_state' &&
          key !== 'category'
        ) {
          formData.append(key, `${value}`);
        } else if (key === 'classification_id') {
          formData.append(key, `${classification_id.id}`);
        } else if (key === 'turnover_id') {
          formData.append(key, `${turnover_id.id}`);
        } else if (key === 'company_state') {
          formData.append(key, `${state.name}`);
        } else if (key === 'category') {
          formData.append(key, `${classification_id.category}`);
        }
      }
      this.apiservice.register(formData).subscribe(
        (res) => {
          this.resSignupMsgCheck = 'success';
          this.resSignupMsg = res.message;
          signupForm.resetForm();
          this.spinner.hide();
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
          // this.registerForm.patchValue({
          //   gst_type: 'registered',
          // });
        },
        (error) => {
          this.spinner.hide();
        }
      );
    } else if (this.registerForm.invalid) {
      this.errorMessage();
    }
  }

  errorMessage() {
    this.messageService.add({
      severity: 'error',
      detail: 'Please fill all details',
    });
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

    if (this.loginForm.valid) {
      let localStorageData: any = {};
      this.spinner.show();
      let data = Object.assign({}, this.loginForm.value);
      this.loginobj = {
        email: data.loginemail,
        password: data.loginpassword,
      };

      this.apiservice.login(this.loginobj).subscribe(
        (res: any) => {
          this.resData = res;
          if (res.error) {
            this.messageService.add({
              severity: 'error',
              detail: res.error,
            });
            this.spinner.hide();
          } else {
            this.spinner.hide();
            this.messageService.add({
              severity: 'success',
              detail: 'User logged in successfully!',
            });

            this.saveAccessToken(res);
            this.localStorage = this.commonFunction.getLocalStorage();

            if (this.localStorage.role == 'Admin')
              setTimeout(() => {
                this.router.navigateByUrl('/dashboard');
                this.spinner.hide();
              }, 1500);
            else if (this.localStorage.role != 'Admin')
              this.router.navigateByUrl('/dashboard');
            this.spinner.hide();
          }
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          // if (error.status == 400) {
          if (error.error?.email) {
            this.resSigninMsg = error.error.email[0];
            this.spinner.hide();
            // console.log(this.resSigninMsg, error.error.email[0]);
          } else if (error.error?.password) {
            this.spinner.hide();
            this.resSigninMsg = error.error.password[0];
          }
          if (error.error?.message) {
            this.spinner.hide();
            this.resSigninMsg = error.error.message;
          }
          this.resSigninMsgCheck = 'danger';
          this.spinner.hide();
          // this.messageService.add({
          //   severity: 'error',
          //   // summary: 'error',
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
    this.spinner.show();
    this.spinnerMsg = 'Loging Out';
    debugger;
    localStorage.removeItem('access_token');
    this.messageService.add({
      severity: 'success',
      // summary: 'success',
      detail: '',
    });
    this.spinner.hide();
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1500);
    this.userName = '';
    this.localStorage = this.commonFunction.getLocalStorage();
    // this.apiservice.logoutUser().subscribe
    //   (res: any) => {

    //   },
    //   (error: any) => {
    //     this.spinner.hide();
    //   }
    // );
    localStorage.clear();
  }

  saveAccessToken(res: any) {
    var localStorageData = {
      access_token: res.access_token,
      username: res.user.name,
      useremail: res.user.email,
      role: res?.role[0],
    };
    localStorage.setItem('access_token', JSON.stringify(localStorageData));
    this.userName = res.user.name;
  }

  // Get Turnover

  getTurnover() {
    // debugger;
    this.apiservice.getTurnover().subscribe((res: any) => {
      console.log(res);
      this.turnover = res.data;
    });
  }

  getClassification() {
    this.apiservice.getClassification().subscribe((res: any) => {
      console.log(res);
      this.classification = res.data;
    });
  }
  // getServiceType() {
  //   this.apiservice.getServiceType().subscribe((res: any) => {
  //     console.log(res);
  //     this.service = res.data;
  //   });
  // }

  onEmailEnter(event) {
    console.log('dwqasw');

    if (event.target.value === '' || event.target.value === null) {
      this.blankEmailState = true;
      console.log(event.target.value, this.blankEmailState);
    } else if (event.target.value !== '' || event.target.value !== null) {
      console.log(event.target.value, this.blankEmailState);
      this.blankEmailState = false;
    }
  }

  onAwardTypeSelection(event) {
    console.log(event.target.defaultValue);
    if (event.target.defaultValue === 'excellence') {
    }
  }
  onDropdownSelection(event: any, params: any) {
    // if (params == 'turnover') {
    //   if (event.target.value != null && event.target.value != 'null') {
    //     // console.log('event', typeof event.target.value, 'done👍👍👍');
    //     this.turnoverState = false;
    //   } else if (event.target.value == null || event.target.value == 'null') {
    //     // console.log('event', typeof event.target.value, 'error 👎👎👎');
    //     this.turnoverState = true;
    //   }
    // } else if (params == 'classification') {
    //   if (event.target.value != null && event.target.value != 'null') {
    //     // console.log('event', typeof event.target.value, 'done👍👍👍');
    //     this.classificationState = false;
    //   } else if (event.target.value == null || event.target.value == 'null') {
    //     // console.log('event', typeof event.target.value, 'error 👎👎👎');
    //     this.classificationState = true;
    //   }
    // } else if (params == 'service') {
    //   if (event.target.value != null && event.target.value != 'null') {
    //     // console.log('event', typeof event.target.value, 'done👍👍👍');
    //     this.serviceState = false;
    //   } else if (event.target.value == null || event.target.value == 'null') {
    //     // console.log('event', typeof event.target.value, 'error 👎👎👎');
    //     this.serviceState = true;
    //   }
    // }
  }

  getState() {
    this.apiservice
      .getDataFromJson('assets/state.json')
      .subscribe((res: any) => {
        this.state = res.Data;
        console.log(this.state);
      });
  }

  bloackAlphabet(event: any) {
    if (event.key == 'Tab') {
      return;
    }
    const keyCode = event.keyCode;
    if (
      [46, 8, 9, 27, 13].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+C
      (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+V
      (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+X
      (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  }

  get gstNo() {
    return this.registerForm.get('company_GST');
  }

  onGstTypeSelection(string: any) {
    console.log(this.registerForm.value.gst_type);
    this.gstType = string;

    if (string == 'nonRegistered') {
      console.log(string);
      // this.gstNo.clearValidators();
      // this.gstNo.updateValueAndValidity();
      this.registerForm.controls['company_GST'].clearValidators();
      this.registerForm.controls['company_GST'].updateValueAndValidity();
      // this.registerForm.controls['company_GST'].clearValidators();
    } else if (string == 'registered') {
      console.log(string);
      // this.gstNo.setValidators([Validators.required]);
      // this.gstNo.updateValueAndValidity();
      this.registerForm.controls['company_GST'].setValidators(
        Validators.required
      );
      this.registerForm.controls['company_GST'].updateValueAndValidity();
      // this.registerForm.controls['company_GST'].addValidators([
      //   Validators.required,
      // ]);
    }
  }
}

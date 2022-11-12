import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
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

  passwordState: boolean = false;

  date: Date = new Date();
  currentYear: any;

  signupState: boolean = false;

  // login in form controls
  loginForm = new FormGroup({
    loginemail: new FormControl('', [Validators.required, Validators.email]),
    // loginpassword: new FormControl('', [Validators.required]),
    otp: new FormControl(),
  });
  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    company_name: ['', Validators.required],
    company_GST: [''],
    company_PAN: ['', Validators.required],
    company_state: ['', Validators.required],
    company_city: ['', Validators.required],
    company_pincode: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{6}$')],
    ],
    company_address: ['', Validators.required],
    address_line2: [''],
    award_type: [null, Validators.required],
    gst_type: [null, Validators.required],
    classification_id: [null, Validators.required],
    turnover: [null, [Validators.required, Validators.min(100000)]],
    category: [''],
    achievements: ['', [Validators.required]],
    reason: ['', [Validators.required]],
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
  nextYear: any;
  loginState: string = 'email';
  groupedclassification: any = [
    {
      label: 'Manufacturing Enterprises',

      items: [
        { labels: 'Agro Base & Agro Input Based Enterprises' },
        { labels: 'Cement & Cement Based Products Enterprises' },
        { labels: 'Chemicals & Fertilizers Enterprises' },
        { labels: 'Engineering & Fabrication Enterprises' },
        { labels: 'Electricals & Electronics Enterprises' },
      ],
    },
    {
      label: 'Manufacturing Enterprises',
      items: [
        { labels: 'Agro Base & Agro Input Based Enterprises' },
        { labels: 'Cement & Cement Based Products Enterprises' },
        { labels: 'Chemicals & Fertilizers Enterprises' },
        { labels: 'Engineering & Fabrication Enterprises' },
        { labels: 'Electricals & Electronics Enterprises' },
      ],
    },
  ];
  otpState: boolean = false;
  commonClasifications: any;
  preYear: any;
  classCheck: boolean = false;
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
    if (localStorage.getItem('award_access_token')) {
      // debugger;
      this.role = JSON.parse(localStorage?.getItem('award_access_token')).role;
      this.router.navigateByUrl('/registered-user');
    }

    this.currentYear = this.date.getFullYear();

    // save user name or email in localstorage
    var award_access_token = localStorage.getItem('award_access_token');
    if (award_access_token && award_access_token != 'undefined') {
      this.userName = JSON.parse(
        localStorage.getItem('award_access_token')
      ).username;
      this.userEmail = JSON.parse(
        localStorage.getItem('award_access_token')
      ).useremail;
    }
    console.log(award_access_token);

    this.localStorage = '';
    this.localStorage = this.commonFunction.getLocalStorage();

    this.getTurnover();
    this.getClassification();
    // this.getServiceType();
    this.getState();
    this.preYear = this.currentYear - 1;
    // this.currentYear = moment(this.currentYear).format('YY');
  }

  get c() {
    return this.registerForm.controls;
  }

  onShowHidePasswordClick() {
    this.passwordState = !this.passwordState;
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
      // let turnover: any = this.registerForm.value.turnover;
      let state: any = this.registerForm.value.company_state;
      // classId.push()
      for (const [key, value] of Object.entries(this.registerForm.value)) {
        console.log(key, value);
        if (
          key !== 'classification_id' &&
          // key !== 'turnover' &&
          key !== 'company_state' &&
          key !== 'category' &&
          key !== 'company_address' &&
          key !== 'address_line2'
        ) {
          formData.append(key, `${value}`);
        } else if (key === 'classification_id') {
          formData.append(key, `${classification_id.id}`);
        } else if (key === 'company_state') {
          formData.append(key, `${state.name}`);
        } else if (key === 'category') {
          formData.append(key, `${classification_id.category}`);
        } else if (key === 'company_address') {
          formData.append(
            key,
            `${value}, ${this.registerForm.value.address_line2}`
          );
        }
      }
      this.apiservice.register(formData).subscribe(
        (res) => {
          this.resSignupMsgCheck = 'success';
          this.resSignupMsg = res.message;
          signupForm.resetForm();
          this.spinner.hide();
          this.registerForm.patchValue({
            gst_type: null,
          });
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
          this.gstType = 'nonRegistered';
          this.signupState = true;
          // setTimeout(() => {
          //   this.router.navigateByUrl('/success');
          // }, 1000);
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

  onLoginClick(event) {
    console.log(event);
    if (event == true) {
      this.signupState = false;
      this.classCheck = true;
    }
  }
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
        // password: data.loginpassword,
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

            // if (this.localStorage.role == 'Admin')
            setTimeout(() => {
              this.router.navigateByUrl('/registered-user');
              this.spinner.hide();
            }, 1500);
            // else if (this.localStorage.role != 'Admin')
            //   this.router.navigateByUrl('/dashboard');
            // this.spinner.hide();
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
    // debugger;

    setTimeout(() => {
      localStorage.removeItem('award_access_token');
      this.messageService.add({
        severity: 'success',
        // summary: 'success',
        detail: '',
      });
      this.router.navigateByUrl('/');
      this.spinner.hide();
    }, 2000);
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
      award_access_token: res.token,
      username: res.User.name,
      useremail: res.User.email,
      role: res?.User.roles[0].name,
    };
    localStorage.setItem(
      'award_access_token',
      JSON.stringify(localStorageData)
    );
    this.userName = res.User.name;
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
      this.commonClasifications = res.data;
    });
  }
  // getServiceType() {
  //   this.apiservice.getServiceType().subscribe((res: any) => {
  //     console.log(res);
  //     this.service = res.data;
  //   });
  // }

  onEmailEnter(event) {
    // console.log('dwqasw');

    if (event.target.value === '' || event.target.value === null) {
      this.blankEmailState = true;
      console.log(event.target.value, this.blankEmailState);
    } else if (event.target.value !== '' || event.target.value !== null) {
      console.log(event.target.value, this.blankEmailState);
      this.blankEmailState = false;
    }
  }

  onAwardTypeSelection(event) {
    console.log(event.target.value);
    let classification = [];
    let gstType = this.registerForm.value.gst_type;
    if (event.target.value === 'excellence') {
      // debugger;
      this.registerForm.controls['turnover'].setValidators([
        Validators.required,
        Validators.min(100000),
      ]);
      this.registerForm.controls['turnover'].updateValueAndValidity();

      this.classification = this.commonClasifications.filter((element: any) => {
        return element.category !== 'Social Enterprise';
      });
      // this.commonClasifications.forEach((element) => {
      //   if (element.category !== 'Social Enterprise') {
      //     classification.push(element);
      //   }
      // });
      // this.classification = classification;
    } else if (event.target.value === 'csr') {
      this.registerForm.controls['turnover'].clearValidators();
      this.registerForm.controls['turnover'].updateValueAndValidity();

      // this.commonClasifications.forEach((element) => {
      //   // if (element.category !== 'Social Enterprise') {
      //     classification.push(element);
      //   // }
      // });
      this.classification = this.commonClasifications;
    } else if (event.target.value === 'se') {
      this.registerForm.controls['turnover'].clearValidators();
      this.registerForm.controls['turnover'].updateValueAndValidity();

      this.classification = this.commonClasifications.filter((element: any) => {
        return element.category === 'Social Enterprise';
      });
      // this.commonClasifications.forEach((element) => {
      //   if (element.category === 'Social Enterprise') {
      //     classification.push(element);
      //   }
      // });
      // this.classification = classification;
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
    // if (event.key == 'Tab') {
    //   return;
    // }
    // const keyCode = event.keyCode;
    // if (
    //   [46, 8, 9, 27, 13].indexOf(event.keyCode) !== -1 ||
    //   // Allow: Ctrl+A
    //   (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
    //   // Allow: Ctrl+C
    //   (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
    //   // Allow: Ctrl+V
    //   (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
    //   // Allow: Ctrl+X
    //   (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
    //   // Allow: home, end, left, right
    //   (event.keyCode >= 35 && event.keyCode <= 39)
    // ) {
    //   // let it happen, don't do anything
    //   return;
    // }
    // // Ensure that it is a number and stop the keypress
    // if (
    //   (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
    //   (event.keyCode < 96 || event.keyCode > 105)
    // ) {
    //   event.preventDefault();
    // }
  }

  onGstTypeSelection(string: any) {
    console.log(this.registerForm.value.gst_type);
    this.gstType = string;

    if (string == 'nonRegistered') {
      this.registerForm.controls['company_GST'].clearValidators();
      this.registerForm.controls['company_GST'].updateValueAndValidity();

      this.registerForm.patchValue({ company_GST: '' });
    } else if (string == 'registered') {
      this.registerForm.controls['company_GST'].setValidators(
        Validators.required
      );
      this.registerForm.controls['company_GST'].updateValueAndValidity();
    }
  }

  // Generate OPT

  otpGenerate() {
    if (this.otpState == false) {
      if (this.loginForm.valid) {
        this.spinner.show();
        let otpObj: any = {
          email: this.loginForm.value.loginemail,
        };
        this.apiservice.generateOTP(otpObj).subscribe((res: any) => {
          console.log(res);
          this.spinner.hide();
          this.otpState = true;
          this.loginForm.controls['otp'].setValidators([Validators.required]);
          this.loginForm.controls['otp'].updateValueAndValidity();
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
        });
      }
    } else if (this.otpState === true) {
      console.log(this.loginForm.valid);

      if (this.loginForm.valid) {
        // this.spinner.show();
        let verifiedOtpObj = {
          email: this.loginForm.value.loginemail,
          otp: this.loginForm.value.otp,
        };
        this.apiservice.checkOTP(verifiedOtpObj).subscribe((res: any) => {
          console.log(res);
          this.saveAccessToken(res);
          this.localStorage = this.commonFunction.getLocalStorage();

          // if (this.localStorage.role == 'Admin')
          setTimeout(() => {
            this.router.navigateByUrl('/registered-user');
            this.spinner.hide();
          }, 1500);
          this.spinner.hide();
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
        });
      }
    }
  }
  onResendOtp() {
    if (this.loginForm.value.loginemail) {
      this.spinner.show();
      let otpObj: any = {
        email: this.loginForm.value.loginemail,
      };
      this.apiservice.generateOTP(otpObj).subscribe((res: any) => {
        console.log(res);
        this.spinner.hide();
        this.otpState = true;
        this.loginForm.controls['otp'].setValidators(Validators.required);
        this.loginForm.controls['otp'].updateValueAndValidity();
        this.messageService.add({
          severity: 'success',
          detail: res.message,
        });
      });
    }
  }
}

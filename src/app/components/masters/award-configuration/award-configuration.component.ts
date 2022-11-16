import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-award-configuration',
  templateUrl: './award-configuration.component.html',
  styleUrls: ['./award-configuration.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AwardConfigurationComponent implements OnInit {
  breadcrumb: any[] = [
    {
      title: 'Award Configuration',
      subTitle: 'Masters',
    },
  ];

  awardConfigForm = this.fb.group({
    category: [null, [Validators.required]],
    // service_id: [null, [Validators.required]],
    // turnover_id: [null, [Validators.required]],
    award_name: [null, [Validators.required]],
    min_turnover: [null, [Validators.required, Validators.min(100000)]],
    max_turnover: [null, [Validators.required, Validators.min(100000)]],
  });

  turnover: any;

  classification: any;

  service: any;

  awardCetagory: any;

  awardMetrix: any;
  filterVal: any;

  clonedMaster: { [s: string]: any } = {};
  turnoverState: boolean;
  classificationState: boolean;
  metrixState: any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    // this.getTurnover();
    // this.getClassification();
    // this.getServiceType();
    // this.getAwardCategory();
    this.getAwardMetrix();
    this.spinnerFunction();
  }

  // spiner State function

  spinnerFunction() {
    if (
      this.turnoverState === true &&
      this.classificationState === true &&
      this.metrixState === true
    ) {
      // debugger;
      this.spinner.hide();
    }
  }

  // get award metrix

  getAwardMetrix() {
    this.apiservice.getAwardMetrix().subscribe((res: any) => {
      console.log('metrix data: ', res);
      this.awardMetrix = res.awardmatrixs;
      this.metrixState = true;
      this.spinnerFunction();
    });
  }

  // get turnover

  getTurnover() {
    this.apiservice.getTurnover().subscribe((res: any) => {
      console.log(res);
      this.turnover = res.data;
      this.turnoverState = true;
      this.spinnerFunction();
    });
  }

  // get classification

  getClassification() {
    this.apiservice.getClassification().subscribe((res: any) => {
      console.log(res);
      this.classification = res.data;
      this.classificationState = true;
      this.spinnerFunction();
    });
  }

  // get service

  getServiceType() {
    // this.apiservice.getServiceType().subscribe((res: any) => {
    //   console.log(res);
    //   this.service = res.data;
    //   this.spinnerFunction();
    // });
  }

  // get award category

  getAwardCategory() {
    this.apiservice.getAwardCategory().subscribe((res: any) => {
      console.log(res);
      this.awardCetagory = res.data;

      this.spinnerFunction();
    });
  }

  // getData() {
  //   // getAwardMetrix() {
  //   this.apiservice.getAwardMetrix().subscribe((res: any) => {
  //     console.log('metrix data: ', res);
  //     this.awardMetrix = res.awardmatrixs;
  //     this.metrixState = true();
  //   });

  //   if (this.awardMetrix) {
  //     this.apiservice.getClassification().subscribe((res: any) => {
  //       console.log(res);
  //       this.classification = res.data;
  //       this.spinnerFunction();
  //     });
  //   }
  //   // }
  // }

  // Submit award metrix

  onSubmit(form) {
    console.log(this.awardConfigForm.value, this.awardConfigForm.valid);
    if (this.awardConfigForm.valid) {
      this.spinner.show();

      this.apiservice
        .postAwardMetrix(this.awardConfigForm.value)
        .subscribe((res: any) => {
          console.log('res : ', res);
          this.spinner.hide();
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
          form.resetForm();
          this.getAwardMetrix();
        });
    }
  }

  // search reset methode

  reset(dt1) {
    dt1.reset();
    this.filterVal = '';
  }

  /******************************  Edit Master  ******************************/

  editService(item: any) {
    this.clonedMaster[item.id] = { ...item };
  }

  /******************************  Edit Save Master  ******************************/

  saveEditService(item: any) {
    // this.spinner.show();
    // this.AwardServices.editService(item, item.id).subscribe((res: any) => {
    //   console.log(res);
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Service name changed successfully!',
    //   });
    //   this.spinner.hide();
    // });
  }

  /******************************  Edit Save Master  ******************************/

  deleteService(item: any) {
    // this.spinner.show();
    // this.AwardServices.deleteService(item.id).subscribe((res: any) => {
    //   console.log(res);
    //   this.getData();
    //   this.spinner.hide();
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Service deleted successfully!',
    //   });
    // });
  }

  // Get form control name

  get f() {
    return this.awardConfigForm.controls;
  }
}

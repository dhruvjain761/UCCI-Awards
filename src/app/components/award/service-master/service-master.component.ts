import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AwardServices } from 'src/app/services/award-services.service';
import { FacilityBookingService } from 'src/app/services/facility-booking.service';
// import { FacilityBookingService } from 'src/app/services/facility-booking.service';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ServiceMasterComponent implements OnInit {
  breadcrumb: any[] = [
    {
      title: 'Service Master',
      subTitle: 'Masters',
    },
  ];

  serviceMasterForm = this.fb.group({
    name: ['', Validators.required],
    slug: ['', Validators.required],
    sort_description: ['', Validators.required],
  });
  serviceData: any;
  filterVal: string;
  clonedMaster: { [s: string]: any } = {};

  constructor(
    private AwardServices: AwardServices,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private FacilityBookingService: FacilityBookingService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getData();
  }

  /******************************  Save Master  ******************************/

  onSubmit(form) {
    this.spinner.show();
    console.log('form', form);
    if (this.serviceMasterForm.valid) {
      this.AwardServices.insertService(this.serviceMasterForm.value).subscribe(
        (res: any) => {
          console.log(res);
          form.resetForm();
          this.spinner.hide();
        }
      );
    }
  }

  /******************************  Get Master  ******************************/

  getData() {
    this.AwardServices.getServiceList().subscribe((res: any) => {
      console.log(res);
      this.serviceData = res.data;
      this.spinner.hide();
    });
  }

  /******************************  Edit Master  ******************************/

  editService(item: any) {
    this.clonedMaster[item.id] = { ...item };
  }

  /******************************  Edit Save Master  ******************************/

  saveEditService(item: any) {
    this.spinner.show();
    this.AwardServices.editService(item, item.id).subscribe((res: any) => {
      console.log(res);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Service name changed successfully!',
      });
      this.spinner.hide();
    });
  }

  /******************************  Edit Save Master  ******************************/

  deleteService(item: any) {
    this.spinner.show();
    this.AwardServices.deleteService(item.id).subscribe((res: any) => {
      console.log(res);
      this.getData();
      this.spinner.hide();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Service deleted successfully!',
      });
    });
  }

  reset(dt1) {
    dt1.reset();
    this.filterVal = '';
  }
}

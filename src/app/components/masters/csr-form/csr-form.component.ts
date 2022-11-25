import { Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { ExcelService } from 'src/app/services/excel.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CsrFormComponent implements OnInit, AfterViewInit {
  sections: any = [];
  position: string;
  formData: any = {};
  previewCheck: any = false;
  actionString: string = '';
  breadcrumb: any[] = [
    {
      title: '',
      // subTitle: '',
    },
  ];
  formId: any;
  title: any;
  hindiTitle: string;
  nextYear: number;
  constructor(
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute,
    private excelService: ExcelService,
    private _formBuilder: FormBuilderService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private _location: Location
  ) {}

  responseMessage: boolean = false;
  award_form_id: any;
  async ngOnInit(): Promise<void> {
    let slug = this.router.snapshot.params;
    console.log(slug);
    this.spinner.show();
    await this._formBuilder
      .getAPI('formWithData/' + slug.slug)
      .then((res: any) => {
        console.log(res);
        this.spinner.hide();
        this.responseMessage = res?.data[0]?.form_response ? true : false;
        if (res?.data[0]?.form_json) {
          this.sections = JSON?.parse(JSON?.parse(res?.data[0]?.form_json));
          this.breadcrumb[0].title = res?.data[0].form_title;
          this.formId = res?.data[0]?.id;
          this.award_form_id = res?.award_form_id;
          this.title = res?.data[0].form_title;

          if (res?.data[0]?.form_title === 'Service Sector Award') {
            this.hindiTitle = 'सेवा क्षेत्र पुरस्कार';
          } else if (
            res?.data[0]?.form_title === 'Manufacturing Sector Award'
          ) {
            this.hindiTitle = 'विनिर्माण क्षेत्र पुरस्कार';
          } else if (res?.data[0]?.form_title === 'Social Enterprises Award') {
            // debugger;
            this.hindiTitle = 'सामाजिक उपक्रम पुरस्कार';
          } else if (res?.data[0]?.form_title === 'CSR Award') {
            this.hindiTitle = 'सामाजिक उत्तरदायित्व पुरस्कार';
          }
        } else if (res?.data[0]?.form_response) {
          this.sections = JSON?.parse(JSON?.parse(res?.data[0]?.form_response));
          this.breadcrumb[0].title = res?.data[0]?.form_title;
          this.formId = res?.data[0]?.id;
          this.award_form_id = res?.data[0]?.award_form_id;
          this.title = res?.data[0]?.form_title;

          if (res?.data[0]?.form_title === 'Service Sector Award') {
            this.hindiTitle = 'सेवा क्षेत्र पुरस्कार';
          } else if (
            res?.data[0]?.form_title === 'Manufacturing Sector Award'
          ) {
            this.hindiTitle = 'विनिर्माण क्षेत्र पुरस्कार';
          } else if (res?.data[0]?.form_title === 'Social Enterprises Award') {
            // debugger;
            this.hindiTitle = 'सामाजिक उपक्रम पुरस्कार';
          } else if (res?.data[0]?.form_title === 'CSR Award') {
            this.hindiTitle = 'सामाजिक उत्तरदायित्व पुरस्कार';
          }

          // this.sections.forEach((section:any) => {
          //   section.controls.forEach((control:any) => {
          //     if(control.name == 'checkbox') {
          //       control.value = Object.assign([],[]);
          //     }
          //   });
          // });
        }
      });

    console.log(this.title, this.hindiTitle);

    let date = new Date();

    let year = date.getFullYear();

    this.nextYear = year + 1;
  }
  getExcelFromJson() {
    let data: any = [];
    // data = Object.assign([],this.sections[2]?.controls);
    this.sections.forEach((section: any) => {
      section.controls.forEach((object: any) => {
        if (object.id != 'table' && object.id != 'label') {
          let obj: any = {};
          for (const property in object) {
            if (property == 'label') {
              obj[object] = object.label;
            } else if (property == 'value') {
              obj.value = object.value;
            }
          }
          data.push(obj);
          console.log(obj)
        }
      });
    });
    console.log(this.sections);
    this.excelService.exportAsExcelFile(data, 'export-to-excel');
  }

  getFormResponse(event: any) {
    console.log(event);
    if (event?.string == 'save draft') {
      let Object = {
        award_form_id: this.award_form_id,
        form_response: JSON.stringify(event?.Obj),
      };

      if (this.responseMessage) {
        Object['id'] = this.formId;
      }

      console.log(Object, this.responseMessage);

      this.spinner.show();
      this._formBuilder
        .createCustomForm('response/store', Object)
        .subscribe((res: any) => {
          console.log(res);
          this.spinner.hide();
          this.messageService.add({
            severity: 'success',
            detail: res.message,
          });
        });
    } else if (event?.string == 'submit') {
      this.previewCheck = true;
      this.confirmationService.confirm({
        message:
          'Are you sure you want to Submit? You would not be able to Edit once Submitted.',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          console.log(event);
          let Object = {
            award_form_id: this.award_form_id,
            form_response: JSON.stringify(event?.Obj),
            status: 'completed',
          };

          if (this.responseMessage) {
            Object['id'] = this.formId;
          }

          console.log(Object, this.responseMessage);

          this.spinner.show();
          this._formBuilder
            .createCustomForm('response/store', Object)
            .subscribe((res: any) => {
              console.log(res);
              this.spinner.hide();
              this.messageService.add({
                severity: 'success',
                detail: res.message,
              });
            });
        },
      });
    } else if (event?.string == 'not valid') {
      // this.previewCheck = true;
      this.messageService.add({
        severity: 'error',
        detail: 'Please fill required fields',
      });
    } else if (event?.string == 'preview') {
      window.scroll(0, 0);
      this.previewCheck = true;
    }
  }
  @ViewChild('back_btn') back_btn: ElementRef;

  getPDF() {
    window.print();
  }

  onBackPress() {
    // this.route.navigateByUrl('/');
    this._location.back();
    // this.Route.navigateByUrl('/');
  }

  ngAfterViewInit() {}
}

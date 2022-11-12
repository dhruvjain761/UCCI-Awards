import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from 'src/app/services/excel.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.scss']
})
export class CsrFormComponent implements OnInit {
  sections: any = [];
  formData:any={};
  breadcrumb: any[] = [
    {
      title: '',
      subTitle: '',
    },
  ];
  formId: any;
  constructor(private spinner: NgxSpinnerService, private router: ActivatedRoute, private excelService:ExcelService, private _formBuilder:FormBuilderService) { }
  ngOnInit(): void {
    let slug = this.router.snapshot.params;
    console.log(slug);
    this.spinner.show();
    this._formBuilder.getAPI('formWithData/'+slug.slug).subscribe((res:any)=> {
      console.log(res);
      this.spinner.hide();
      this.sections = JSON.parse(JSON.parse(res?.data[0]?.form_json));
      console.log(this.sections)
      this.breadcrumb[0].title = res?.data[0].form_title;
      this.formId = res?.data[0]?.id;
    })
    console.log(this.sections)
  }
  getExcelFromJson() {
    let data : any = []
    // data = Object.assign([],this.sections[2]?.controls);
    this.sections.forEach((section:any) => {
      section.controls.forEach((object:any) => {
        if(object.id!='table' && object.id!='label') {
          let obj:any = {};
          for (const property in object) {
            if( property == 'label') {
              obj.label = object.label; 
            }
            else if(property == 'value') {
              obj.value = object.value;
            }
          }
          data.push(obj);
        }
      });
    });
    console.log(this.sections)
    this.excelService.exportAsExcelFile(data, 'export-to-excel');
  }

  getFormResponse(event:any) {
    console.log(event);
    let Object = {
      award_form_id: this.formId,
      form_response: JSON.stringify(event)
    }
    this.spinner.show();
    this._formBuilder.createCustomForm('response/store',Object).subscribe((res:any)=> {
      console.log(res);
      this.spinner.hide();
      alert("form submitted successfully!");
    })
  }

}

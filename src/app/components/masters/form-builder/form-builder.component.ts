import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [MessageService],
})
export class FormBuilderComponent implements OnInit {
  sectionsData: any = [{
    title: `Section 1`,
    description: "Enter Description",
    state: "normal",
    canEnter: true,
    canExit: false,
    controls: [
    ]
  }];
  sections: any = []
  errorMsg: boolean;

  constructor(
    private spinner: NgxSpinnerService,
    private activeRoute: ActivatedRoute,
    private messageService: MessageService,
    private __formBuilder: FormBuilderService,
    private route: Router
  ) { }

  formModel: any = { form_name: '', awardCategory: '' };
  slug: any;
  jsonData: any;
  formId: any;
  awardCategory: any = [];
  breadcrumb: any[] = [
    {
      title: 'Form Builder',
      subTitle: 'Masters',
    },
  ];

  async ngOnInit() {
    this.__formBuilder.getAPI('award-catgeory').subscribe((res: any) => {
      this.awardCategory = res.data;
    });
    this.slug = this.activeRoute.snapshot.params;
    console.log(this.slug.slug);
    // debugger;
    if (this.slug.slug) {
      this.spinner.show();
      this.__formBuilder
        .getAPI('formWithData/' + this.slug.slug)
        .subscribe((res: any) => {
          console.log(res);
          this.formModel.awardCategory = res.data[0].award_category;
          this.formModel.form_name = res.data[0].form_title;
          this.formId = res.data[0].id;
          this.sections = Object.assign(
            [],
            JSON.parse(JSON.parse(res.data[0].form_json))
          );
          console.log(this.sectionsData);
          this.spinner.hide();
        });
    }
    else if (this.slug.slug == undefined) {
      this.sections = [{
        title: `Section 1`,
        description: "Enter Description",
        state: "normal",
        canEnter: true,
        canExit: false,
        controls: [
        ]
      }];
    }
  }

  // getJson(event:any) {
  //   console.log(event);
  //   if(this.formModel.form_name) {
  //     this.jsonData = JSON.parse(event);
  //     this.formModel.data = this.jsonData;
  //     let formObject = {
  //       data : JSON.stringify(this.formModel.data),
  //       form_name:this.formModel.form_name
  //     }
  //     if(this.slug.params.slug) {
  //       this.__formBuilder.editCustomForm(this.formId,formObject).subscribe((res:any)=> {
  //         this.route.navigateByUrl('/custom-form')
  //       },
  //       (error:HttpErrorResponse)=> {
  //         console.log(error);
  //       })
  //     }
  //     else {
  //       this.__formBuilder.createCustomForm(formObject).subscribe((res:any)=> {
  //         this.route.navigateByUrl('/custom-form')
  //       },
  //       (error:HttpErrorResponse)=> {
  //         console.log(error);
  //       })
  //     }
  //   }
  //   else {
  //     this.messageService.add({ severity: 'error', summary: 'OOPS', detail: 'Please enter form title to proceed !' });
  //     window.scroll(0,0)
  //   }
  // }

  onReject() {
    this.messageService.clear('c');
  }

  customFormData(event: any) {
    console.log(event);
    let Object = {
      form_title: this.formModel.form_name,
      award_category: this.formModel.awardCategory,
      form_json: JSON.stringify(event),
    };
    if (this.formModel.form_name && this.formModel.awardCategory) {
      this.errorMsg = false;
      if (this.slug.slug) {
        this.__formBuilder
          .createCustomForm('edit/formData/' + this.formId, Object)
          .subscribe((res: any) => {
            this.route.navigateByUrl('custom-forms');
          });
      } else {
        this.__formBuilder
          .createCustomForm('create/formData', Object)
          .subscribe((res: any) => {
            console.log(res);
            this.route.navigateByUrl('custom-forms');
          });
      }
    } else {
      this.errorMsg = true;
      window.scroll(0, 0);
    }
  }
}

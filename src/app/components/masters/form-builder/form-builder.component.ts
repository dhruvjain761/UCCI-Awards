import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [MessageService]
})
export class FormBuilderComponent implements OnInit {
  
  constructor(private activeRoute:ActivatedRoute,private messageService: MessageService,private __formBuilder:FormBuilderService,private route:Router) { }
  
  formModel:any = {};
  slug:any;
  jsonData : any;
  formId:any;
  breadcrumb: any[] = [
    {
      title: 'Form Builder',
      subTitle: 'Masters',
    },
  ];

  ngOnInit(): void {
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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonClass } from 'src/app/common';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.scss'],
  providers: [MessageService],
})
export class DashboardSidemenuComponent implements OnInit {
  localStorage: any;
  awardForm: any = [];
  constructor(
    private apiservice: ApiService,
    private messageService: MessageService,
    private router: Router,
    private commonFunction: CommonClass,
    private _formBuilder: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.localStorage = this.commonFunction.getLocalStorage();
    if(this.localStorage.role != 'Auditor') {
      this._formBuilder.getAPI('formData').then((res:any)=> {
        console.log(res)
        this.awardForm = res.data;
        console.log(this.awardForm);
      })
    }
    //  console.log(this.localStorage)
  }

  logout() {
    this.apiservice.logoutUser().subscribe((res: any) => {
      console.log(res, 'resresres');
      localStorage.removeItem('award_access_token');
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: res.message,
      });
      this.router.navigateByUrl('');
    });
  }

  navigate(slug?: any) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([slug]);
  }
}

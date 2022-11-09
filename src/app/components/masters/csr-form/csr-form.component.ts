import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.scss']
})
export class CsrFormComponent implements OnInit {

  constructor() { }
  breadcrumb: any[] = [
    {
      title: 'CSR Award Form',
      subTitle: 'Masters',
    },
  ];
  ngOnInit(): void {
  }

}

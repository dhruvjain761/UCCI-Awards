import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent implements OnInit {
  @Output() clickState: any = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onGotoLogin() {
    this.clickState.emit(true);
  }
}

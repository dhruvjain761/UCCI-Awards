import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { TurnoverMasterService } from 'src/app/services/turnover-master.service';

@Component({
  selector: 'app-turnover-master',
  templateUrl: './turnover-master.component.html',
  styleUrls: ['./turnover-master.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TurnoverMasterComponent implements OnInit {
  editMemberCategory: any;

  focusState: boolean = false;

  position: string;

  postTurnoverForm = this.fb.group({
    component: ['', Validators.required],
  });

  memberCategoryName: any;

  name: string = '';

  member: any[];

  loading: boolean = true;

  important: string = ' !important';

  clonedProducts: { [s: string]: any } = {};

  editState: boolean = false;

  filterVal: string;

  spinnerMsg: string = 'loading...';
  constructor(
    private TurnoverMasterService: TurnoverMasterService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService
  ) {}
  // @ViewChild('focus') edit: ElementRef;

  breadcrumb: any[] = [
    {
      title: 'Turnover Master',
      subTitle: 'Masters',
    },
  ];

  ngOnInit(): void {
    this.getMemberCategories();
    if (this.postTurnoverForm.value.component == '') {
      console.log('form values is blank ');
    } else if (this.postTurnoverForm.value.component != '') {
      console.log('form values is full  ');
    }

    this.spinner.show();
  }
  /********************************************************************
                Add Member Categories Master
********************************************************************/

  onSubmit(turnoverForm) {
    if (this.postTurnoverForm.invalid) {
      this.messageService.add({
        severity: 'error',
        // summary: 'Please fill all details!',
        detail: 'Some details are not filled!',
      });
    } else if (this.postTurnoverForm.valid) {
      this.TurnoverMasterService.insertTurnoverMaster(
        this.postTurnoverForm.value
      ).subscribe((data) => {
        this.getMemberCategories();
        this.messageService.add({
          severity: 'success',
          // summary: 'Success',
          detail: data.message,
        });
        turnoverForm.resetForm();
      });
    }
  }

  /********************************************************************
                Get Member Categories Master
********************************************************************/

  getMemberCategories() {
    this.TurnoverMasterService.getTurnoverMaster().subscribe((res) => {
      this.member = res.data;
      console.log('res', res);
      this.spinner.hide();
      this.loading = false;
      this.postTurnoverForm.reset();
    });
  }

  /********************************************************************
                  Edit Member Categories Master
  ********************************************************************/

  editMemberCategoryMaster(event: any) {
    // this.editMemberCategory = event;
    this.clonedProducts[event.id] = { ...event };
  }

  onRowEditSave(member: any) {
    this.loading = true;

    if (member.component != '' && member.component != null) {
      this.TurnoverMasterService.editTurnoverMaster(
        member,
        member.id
      ).subscribe((data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Member category changed successfully',
        });

        this.loading = false;
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Please fill all details!',
        detail: 'some details are not filled!',
      });

      this.loading = false;
    }
  }

  onRowEditCancel(member: any, index: number) {
    this.member[index] = this.clonedProducts[member.id];
  }
  /********************************************************************
                Delet Member Categories Master
********************************************************************/

  deleteMaster(event) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.TurnoverMasterService.deleteTurnoverMaster(event.id).subscribe(
          (data) => {
            this.getMemberCategories();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Member category deleted successfully',
            });
          }
        );
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  reset(dt1) {
    dt1.reset();
    this.filterVal = '';
  }
}

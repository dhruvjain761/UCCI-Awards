import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { MemberClassificationMasterService } from 'src/app/services/member-classification.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-member-classification',
  templateUrl: './member-classification.component.html',
  styleUrls: ['./member-classification.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MemberClassificationComponent implements OnInit {
  filterVal: string;

  constructor(
    private MemberClassificationMasterService: MemberClassificationMasterService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService
  ) {}

  focusState: boolean = false;

  position: string;

  postMemberClassificationForm = this.fb.group({
    name: ['', Validators.required],
    quota_percentage: ['', Validators.required],
    is_professional: ['']
  });

  memberCategoryName: any;

  classification: any[];

  spinnerMsg: string;

  // validTextName: boolean = true;

  // validTotalSeats: boolean = true;

  // validOccupiedSeats: boolean = true;

  important: string = ' !important';

  breadcrumb: any[] = [
    {
      title: 'Member Classification',
      subTitle: 'Masters',
    },
  ];

  clonedProducts: { [s: string]: any } = {};

  ngOnInit(): void {
    this.spinnerMsg = 'loading...';
    this.getMemberCategories();
    this.spinner.show();
  }
  /********************************************************************
                Add Member Categories Master
********************************************************************/

  onSubmit(memberClassification) {
    
    if (this.postMemberClassificationForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Please fill all details!',
        detail: 'Some details are not filled!',
      });

    } else if (this.postMemberClassificationForm.valid) {
      this.MemberClassificationMasterService.insertMemberClassificationMaster(
        this.postMemberClassificationForm.value
      ).subscribe((data) => {
        // console.log('data : ', data);
        memberClassification.resetForm();
        this.postMemberClassificationForm.reset();
        this.getMemberCategories();

        this.postMemberClassificationForm.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Member category added successfully',
        });
      });
    }
  }

  /********************************************************************
                Get Member Categories Master
********************************************************************/

  getMemberCategories() {
    this.MemberClassificationMasterService.getMemberClassificationMaster().subscribe(
      (res) => {
        console.log(res);
        
        this.classification = res.data;
        this.spinner.hide();
      }
    );
  }

  /********************************************************************
                  Edit Member Categories Master
  ********************************************************************/

  editMemberCategoryMaster(event: any) {

    this.clonedProducts[event.id] = { ...event };
  }

  
  onRowEditSave(classification: any) {

    if (classification.name != '' && classification.name != null) {
      if(classification.quota_percentage != '' && classification.quota_percentage != null){
          this.MemberClassificationMasterService.editMemberClassificationMaser(
            classification,
            classification.id
          ).subscribe((data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Member Classification changed successfully!',
            });
          });
      }else this.error();
    } else this.error();
  }

  error () {
    this.messageService.add({
      severity: 'error',
      summary: 'Please fill all details!',
      detail: 'some details are not filled!',
    });

  }
  onRowEditCancel(member: any, index: number) {
    this.classification[index] = this.clonedProducts[member.id];
  }

  /********************************************************************
                Delet Member Categories Master
********************************************************************/

  deleteMaster(event) {
    console.log('fewcds');

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.MemberClassificationMasterService.deleteMemberClassificationMaser(
          event.id
        ).subscribe((data) => {
          this.getMemberCategories();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Member category deleted successfully',
          });
        });
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

  // onSetValidState() {
  //   if (this.postMemberClassificationForm.invalid) {
  //     this.validTextName = false;
  //     this.validTotalSeats = false;
  //     this.validOccupiedSeats = false;
  //   } else if (this.postMemberClassificationForm.valid) {
  //     this.validTextName = true;
  //     this.validTotalSeats = true;
  //     this.validOccupiedSeats = true;
  //   }
  // }

  reset(dt1) {
    dt1.reset();
    this.filterVal = '';
  }
}

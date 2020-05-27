import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-usage-meeting',
  templateUrl: './usage-meeting.component.html',
  styleUrls: ['./usage-meeting.component.scss']
})
export class UsageMeetingComponent implements OnInit {
  @Input() showCreateRule: boolean;
  priority: string;
  showError = false;
  closeResult = '';
  ruleList = [
    {
      id: 1,
      ruleName: 'Russia Originating and terminating Calls',
      originatingFrom: 'VIP-Russian, Russian Diplomat',
      terminateTo : 'Group B, XYZ Group',
      allowanceThreshold : 'A2-1233|TH-102',
      priority: '488',
      tod: 'Yes',
      counters: 'Selected 2',
      createdBy: 'Vipin',
      createdDate: '15-may-2020'
    },
    {
      id: 2,
      ruleName: 'Russia Diplomats - Originating Calls',
      originatingFrom: 'VIP-Russian, Russian Diplomat',
      terminateTo : 'Group B, XYZ Group',
      allowanceThreshold : 'A2-1233|TH-102',
      priority: '488',
      tod: 'Yes',
      counters: 'Selected 2',
      createdBy: 'Vipin',
      createdDate: '15-may-2020'
    },
    {
      id: 3,
      ruleName: 'India VVIP ',
      originatingFrom: 'VIP-Russian, Russian Diplomat',
      terminateTo : 'Group B, XYZ Group',
      allowanceThreshold : 'A2-1233|TH-102',
      priority: '488',
      tod: 'Yes',
      counters: 'Selected 2',
      createdBy: 'Vipin',
      createdDate: '15-may-2020'
    },
    {
      id: 4,
      ruleName: 'Russia Orig. Calls',
      originatingFrom: 'VIP-Russian, Russian Diplomat',
      terminateTo : 'Group B, XYZ Group',
      allowanceThreshold : 'A2-1233|TH-102',
      priority: '488',
      tod: 'Yes',
      counters: 'Selected 2',
      createdBy: 'Vipin',
      createdDate: '15-may-2020'

    }
  ];


  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  showErrorPopover() {
    this.showError = !this.showError;
  }


  openLg(content) {
    this.modalService.open( content, {size: 'lg', windowClass: 'custom-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

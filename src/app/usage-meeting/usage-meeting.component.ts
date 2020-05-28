import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-usage-meeting',
  templateUrl: './usage-meeting.component.html',
  styleUrls: ['./usage-meeting.component.scss']
})
export class UsageMeetingComponent implements OnInit {
  @Input() showCreateRule: boolean;
  showeditOptions = false;
  selectedRow : Number;
  priority: string;
  showError = false;
  closeResult = '';
  verified = false;
  modalReference: any;
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

  selectedPeople = [];
  selectedTerminating = [];
  people = [
    {
      'id': '5a15b13c36e7a7f00cf0d7cb',
      'name': 'Karyn Wright',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c2340978ec3d2c0ea',
      'name': 'Rochelle Estes',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c663ea0af9ad0dae8',
      'name': 'Mendoza Ruiz',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13cc9eeb36511d65acf',
      'name': 'Russia',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c728cd3f43cc0fe8a',
      'name': 'France',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13ca51b0aaf8a99c05a',
      'name': 'Portugal',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13cc3b9381ffcb1d6f7',
      'name': 'Australia',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13ce58cb6ff62c65164',
      'name': 'USA',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c38fd49fefea8db80',
      'name': 'China',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c9680913c470eb8fd',
      'name': 'India',
      'countries': 'Select all',
    }
  ];
  terminating = [
    {
      'id': '5a15b13c36e7a7f00cf0d7cb',
      'name': 'Karyn Wright',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c2340978ec3d2c0ea',
      'name': 'Rochelle Estes',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c663ea0af9ad0dae8',
      'name': 'Mendoza Ruiz',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13cc9eeb36511d65acf',
      'name': 'Russia',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c728cd3f43cc0fe8a',
      'name': 'France',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13ca51b0aaf8a99c05a',
      'name': 'Portugal',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13cc3b9381ffcb1d6f7',
      'name': 'Australia',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13ce58cb6ff62c65164',
      'name': 'USA',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c38fd49fefea8db80',
      'name': 'China',
      'countries': 'Select all',
    },
    {
      'id': '5a15b13c9680913c470eb8fd',
      'name': 'India',
      'countries': 'Select all',
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

   getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showPopover(i) {
    this.selectedRow = i;
    this.showeditOptions = !this.showeditOptions;
  }

  deleterow(i) {
    this.ruleList.splice(i, 1);
    this.showeditOptions = !this.showeditOptions;
  }

  edit() {
    this.showCreateRule = true;
    this.showeditOptions = !this.showeditOptions;
  }
  closeModal(msg) {
    this.modalReference.close();
  }

  clearfields() {
    this.showCreateRule = false;
  }
}

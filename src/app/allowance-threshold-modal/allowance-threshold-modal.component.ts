import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allowance-threshold-modal',
  templateUrl: './allowance-threshold-modal.component.html',
  styleUrls: ['./allowance-threshold-modal.component.scss']
})
export class AllowanceThresholdModalComponent implements OnInit {
  selectedTemplate = [];
  closeResult = '';
  allowanceList = [
    {
      id: 1,
      templatesName: 'A1-1100',
    },
    {
      id: 2,
      templatesName: 'A2-1780',
    },
    {
      id: 3,
      templatesName: 'A3-1890',
    },
    {
      id: 4,
      templatesName: 'A4-1109',
    },
    {
      id: 5,
      templatesName: 'A5-1156',
    },
    {
      id: 6,
      templatesName: 'A6-1179',
    }
    ];
  thresholdList = [
    {
      id: 11,
      templatesName: 'b1-1100',
    },
    {
      id: 22,
      templatesName: 'b2-1780',
    },
    {
      id: 33,
      templatesName: 'b3-1890',
    },
    {
      id: 44,
      templatesName: 'b4-1109',
    },
    {
      id: 55,
      templatesName: 'B5-1156',
    },
    {
      id: 60,
      templatesName: 'B6-1179',
    }
  ];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  addToList(itemName, i, event) {
      this.selectedTemplate.push({'name': itemName, 'id': i});
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

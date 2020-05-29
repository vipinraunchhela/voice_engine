import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-counter-type',
  templateUrl: './counter-type.component.html',
  styleUrls: ['./counter-type.component.scss']
})
export class CounterTypeComponent implements OnInit {
  closeResult = '';
  saveResult = [];
  counters = [
    {
      'name': 'Specific A to Specific B',
      'checked': false
    },
    {
      'name': 'Specific A to Group B',
      'checked': false
    },
    {
      'name': 'Group A to Specif B',
      'checked': false
    },
    {
      'name':  'Group A to Group B',
      'checked': false
    }
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'counter_modal' }).result.then((result) => {
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

  enableTextBox(counterName) {
    for (const counter of this.counters) {
      if (counterName === counter.name) {
        counter.checked = !counter.checked;
      }
    }
  }

  onSave() {
    this.saveResult = [];
    for (const counter of this.counters) {
      if (counter.checked === true) {
        this.saveResult.push(counter.checked);
      }
    }
    this.modalService.dismissAll();
  }

}

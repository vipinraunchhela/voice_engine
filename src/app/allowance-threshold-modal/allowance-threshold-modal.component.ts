import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allowance-threshold-modal',
  templateUrl: './allowance-threshold-modal.component.html',
  styleUrls: ['./allowance-threshold-modal.component.scss']
})
export class AllowanceThresholdModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  selectedAllowanceTemplate = null;
  selectedThresholdTemplate = null;
  results = [];
  pushedAllowance = {};
  pushedThreshold = {};
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
  constructor() { }

  ngOnInit() {
  }

  addToList(itemName, i) {
      this.selectedAllowanceTemplate = {'name': itemName, 'id': i};
      console.log(this.selectedAllowanceTemplate);
  }
  addToThresholdList(name, i) {
    this.selectedThresholdTemplate = {'name': name, 'id': i};
    console.log(this.selectedThresholdTemplate);
  }
  addToRule() {
    this.results.push([this.selectedAllowanceTemplate, this.selectedThresholdTemplate])
    this.pushedAllowance[this.selectedAllowanceTemplate.id] = true;
    this.pushedThreshold[this.selectedThresholdTemplate.id] = true;
    this.selectedAllowanceTemplate = null;
    this.selectedThresholdTemplate = null;
  }


  deleteFromResults(selectedResult, i) {
    this.pushedAllowance[selectedResult[0].id] = false;
    this.pushedThreshold[selectedResult[1].id] = false;
    this.results.splice(i, 1);
  }

  saveData() {
    this.closeModal.emit('save data');
  }
}

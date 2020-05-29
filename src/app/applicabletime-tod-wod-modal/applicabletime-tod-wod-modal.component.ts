import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
             selector: 'app-applicabletime-tod-wod-modal',
             templateUrl: './applicabletime-tod-wod-modal.component.html',
             styleUrls: ['./applicabletime-tod-wod-modal.component.scss']
           })
export class ApplicabletimeTodWodModalComponent implements OnInit {

  isApplicableTimeWindow = false;
  isDaysDropdown = false;
  isHoursDropdown = false;
  selectedDays = [];
  days = [
    {
      'id': '1',
      'day': 'Mon',
      'days': 'Select all',
    },
    {
      'id': '2',
      'day': 'Tue',
      'days': 'Select all',
    },
    {
      'id': '3',
      'day': 'Wed',
      'days': 'Select all',
    },
    {
      'id': '4',
      'day': 'Thu',
      'days': 'Select all',
    },
    {
      'id': '5',
      'day': 'Fri',
      'days': 'Select all',
    },
    {
      'id': '6',
      'day': 'Sat',
      'days': 'Select all',
    },
    {
      'id': '7',
      'day': 'Sun',
      'days': 'Select all',
    }
  ];


  hours = [
    {
      'id': 0,
      'duration': '0-1 Hr',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 1,
      'duration': '1-2 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 2,
      'duration': '2-3 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 3,
      'duration': '3-4 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 4,
      'duration': '4-5 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 5,
      'duration': '5-6 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 6,
      'duration': '6-7 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 7,
      'duration': '7-8 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 8,
      'duration': '8-9 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 9,
      'duration': '9-10 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 10,
      'duration': '10-11 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': 11,
      'duration': '11-12 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    }
  ];
  selectedDaysFilter = [];
  selectedHours = [];

  constructor(private modalService: NgbModal,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'tod-wod-modal zoomIn' });
  }

  onSwitch() {
    this.isApplicableTimeWindow = !this.isApplicableTimeWindow;
    if (this.isApplicableTimeWindow === false) {
      this.isDaysDropdown = false;
      this.isHoursDropdown = false;
    }
  }

  showDaysDropdown() {
    this.isDaysDropdown = !this.isDaysDropdown;
  }

  showHoursDropdown() {
    this.isHoursDropdown = !this.isHoursDropdown;
  }

  onHourSelection(selected, timeSlot) {
    this.selectedHours = [];
    for (const selectedTime of this.hours) {
      if (selectedTime.id === selected.id) {
        if (timeSlot === 'am') {
          selectedTime.amChecked = !selectedTime.amChecked;
        } else {
          selectedTime.pmChecked = !selectedTime.pmChecked;
        }
      }
    }
  }

  onSave() {
    this.modalService.dismissAll();
  }

  chips() {
    let chipsData = '';
    let maximumChecked = 0;
    let maxSelected = 0;
    for (const hour of this.hours) {
      if (maximumChecked < 2) {
        if (hour.amChecked || hour.pmChecked) {
          chipsData += hour.duration + ' ';
        }
        if (hour.amChecked) {
          chipsData += '(am';
          if (!hour.pmChecked) {
            chipsData += ')';
          }
        }
        if (hour.pmChecked) {
          if (hour.amChecked) {
            chipsData += ',pm)';
          } else {
            chipsData += '(pm)';
          }
        }
      }
      if (hour.amChecked || hour.pmChecked) {
        maximumChecked++;
          chipsData += '|';
      }
    }
    if (maximumChecked >= 3) {
      maxSelected = maximumChecked - 2;
      chipsData += '+' + maxSelected;
    }

    const arrayChips = chipsData.split('|');
    this.selectedDaysFilter = [];
    this.selectedDaysFilter = arrayChips;
    console.log(this.selectedDaysFilter);
  }

  removeFilter(index) {
    for (const filter of this.hours) {
      if (filter.id === index) {
        filter.amChecked = false;
        filter.pmChecked = false;
      }
    }
    this.selectedDaysFilter.splice(index, 1);
  }

}

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
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  hours = [
    {
      'id': '1',
      'duration': '0-1 Hr',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '2',
      'duration': '1-2 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '3',
      'duration': '2-3 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '4',
      'duration': '3-4 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '5',
      'duration': '4-5 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '6',
      'duration': '5-6 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '7',
      'duration': '6-7 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '8',
      'duration': '7-8 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '9',
      'duration': '8-9 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '10',
      'duration': '9-10 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '11',
      'duration': '10-11 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    },
    {
      'id': '12',
      'duration': '11-12 Hrs',
      'am': 'AM',
      'amChecked': false,
      'pm': 'PM',
      'pmChecked': false
    }
  ];
  selectedDaysFilter = [];
  amSelectedHrs = [];
  pmSelectedHrs = [];

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

  onAmSelection(selected, timeSlot) {
    this.amSelectedHrs = [];
    for (const selectedTime of this.hours) {
      if (selectedTime.id === selected.id) {
        if (timeSlot === 'am') {
          selectedTime.amChecked = !selectedTime.amChecked;
        } else {
          selectedTime.pmChecked = !selectedTime.pmChecked;
        }
      }
      // if (selectedTime.id === selected.id) {
      //   selectedTime.amChecked = !selectedTime.amChecked;
      // }
      // if (selectedTime.amChecked === true) {
      //   this.amSelectedHrs.push({
      //                             'duration': selectedTime.duration,
      //                             'am': selectedTime.amChecked
      //                           });
      // }
    }
    console.log(this.hours);
  }

  onSave() {
    this.selectedDaysFilter = [];
    this.selectedDaysFilter.push(this.amSelectedHrs, this.pmSelectedHrs);
    this.modalService.dismissAll();
    console.log(this.selectedDaysFilter);
  }

  chips() {
    let chipsData = '';
    let maximumChecked = 0;
    for (const hour of this.hours) {
      if (maximumChecked <= 3) {
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
      chipsData += '+' + maximumChecked;
    }

    const arrayChips = chipsData.split('|');
    this.selectedDaysFilter = [];
    this.selectedDaysFilter = arrayChips;
    console.log(this.selectedDaysFilter);
  }

  // @HostListener('document:click', ['$event'])
  // closeDropdowns(event) {
  //   if (this.elementRef && this.elementRef.nativeElement.contains(event.target)) {
  //     this.isHoursDropdown = false;
  //     this.isDaysDropdown = false;
  //   }
  // }

}

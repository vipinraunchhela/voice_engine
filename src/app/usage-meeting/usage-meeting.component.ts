import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-usage-meeting',
  templateUrl: './usage-meeting.component.html',
  styleUrls: ['./usage-meeting.component.scss']
})
export class UsageMeetingComponent implements OnInit {
  @Input() showCreateRule: boolean;
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


  constructor() {}

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string;
  showCreateRule = false;
  hideSearchdropDown = true;
  showAdvanceFilter = false;
  items = [
    {
      id: 1,
      ruleName: 'Russia Originating and terminating Calls',
      originatingFrom: 'VIP-Russian, Russian Diplomat',
      terminateTo : 'Group B, XYZ Group',
      AllowanceThreshold : 'A2-1233|TH-102',
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
      AllowanceThreshold : 'A2-1233|TH-102',
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
      AllowanceThreshold : 'A2-1233|TH-102',
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
      AllowanceThreshold : 'A2-1233|TH-102',
      priority: '488',
      tod: 'Yes',
      counters: 'Selected 2',
      createdBy: 'Vipin',
      createdDate: '15-may-2020'

    }
  ];
  originating = [
    {
      id: 1,
      ruleName: 'Originating and terminating Calls'
    },
    {
      id: 2,
      ruleName: 'Diplomats - Originating Calls'
    },
    {
      id: 3,
      ruleName: 'VVIP '
    },
    {
      id: 4,
      ruleName: 'Russia Orig'
    }
  ];
  showRules() {
    this.showCreateRule = !this.showCreateRule;
  }

  emptyFiled() {
    this.query = null;
  }

  searchForRuleName(ruleName: any) {
    this.query = ruleName;
    this.hideSearchdropDown = false;

  }
}

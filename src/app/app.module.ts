import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search';
import { UsageMeetingComponent } from './usage-meeting/usage-meeting.component';
import 'rxjs/add/observable/of';
import { AllowanceThresholdModalComponent } from './allowance-threshold-modal/allowance-threshold-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';




@NgModule({
  declarations: [
    AppComponent,
    UsageMeetingComponent,
    SearchPipe,
    AllowanceThresholdModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

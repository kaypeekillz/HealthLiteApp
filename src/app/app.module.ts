import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenderComponent } from './calender/calender.component';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';
import { PatientComponent } from './patient/patient.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
// import * as ApexCharts from 'apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleComponent,
    MainpageComponent,
    SidebarComponent,
    TopnavComponent,
    CalenderComponent,
    RecentactivityComponent,
    PatientComponent,
    PiechartComponent,
    BarchartComponent
  ],
  imports: [
    // ApexCharts,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FullCalendarModule,
    HttpClientModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

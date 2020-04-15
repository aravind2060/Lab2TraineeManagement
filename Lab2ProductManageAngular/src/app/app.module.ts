import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CommonModule } from '@angular/common';
import { AddATraineeComponent } from './add-atrainee/add-atrainee.component'
import { GetATraineeComponent } from './get-atrainee/get-atrainee.component';
import { GetAllTraineesComponent } from './get-all-trainees/get-all-trainees.component';
import { DeleteATraineeComponent } from './delete-atrainee/delete-atrainee.component';
import { UpdateATraineeComponent } from './update-atrainee/update-atrainee.component';
@NgModule({
  declarations: [
    AppComponent, AddATraineeComponent, GetATraineeComponent, GetAllTraineesComponent, DeleteATraineeComponent, UpdateATraineeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

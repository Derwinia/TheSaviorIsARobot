import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    MultiSelectModule,
    CheckboxModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    SliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
  ],
  exports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    MultiSelectModule,
    CheckboxModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    SliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
  ]
})
export class SharedModule { }

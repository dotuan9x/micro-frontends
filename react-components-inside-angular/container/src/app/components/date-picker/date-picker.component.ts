import {Component, AfterViewInit} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    this.renderComponent();
  }

  private renderComponent() {
    ReactDOM.render(
      React.createElement(DatePicker, {
        onChange: (date, dateString) => {
          console.log(date, dateString)
        }
      }),
      document.getElementById("datepicker")
    );
  }
}

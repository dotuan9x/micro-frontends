import {Component, AfterViewInit} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Checkbox} from 'antd';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    this.renderComponent();
  }

  private renderComponent() {
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    ReactDOM.render(
      React.createElement(Checkbox.Group , {
        options: options,
        onChange: (checkedValues) => {
          console.log('checked = ', checkedValues);
        }
      }),
      document.getElementById("checkbox")
    );
  }

}

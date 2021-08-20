import {Component, AfterViewInit} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Table} from 'antd';

@Component({
  selector: 'table',
  templateUrl: './table.component.html'
})
export class TableComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    this.renderComponent();
  }

  private renderComponent() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        },
        {
          title: 'Action',
          key: 'action',
        },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '4',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];


    ReactDOM.render(
      React.createElement(Table, {
        columns: columns,
        dataSource: data
      }),
      document.getElementById("table")
    );
  }
}

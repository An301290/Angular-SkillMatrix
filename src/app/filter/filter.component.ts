import { Component, OnInit } from '@angular/core';
import { FilterRowComponent } from '../components/filterrow/filterrow.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterRows: FilterRowComponent[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filterRows.push(new FilterRowComponent());
  }

  onClick() {
    console.log('Add');
  }

  addNewFilterRow() {
    this.filterRows.push(new FilterRowComponent());
  }

  closeFilter = true;

  toggleFilter() {
    this.closeFilter = !this.closeFilter;
  }
}

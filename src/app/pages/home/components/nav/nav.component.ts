import { Component, Input, OnInit } from '@angular/core';
import { INav } from '../../models/netflix-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() public nav!: INav
  constructor() { }

  ngOnInit(): void {
  }

}

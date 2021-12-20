import { Component, Input, OnInit } from '@angular/core';
import { Itop10 } from '../../models/netflix-model';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements OnInit {
@Input() public top10!: Itop10;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { GasyData } from '../models/gasy-data.model';
import { GasyDataService } from '../service/gasy-data.service';

@Component({
  selector: 'app-gasy-list',
  templateUrl: './gasy-list.component.html',
  styleUrls: ['./gasy-list.component.scss']
})
export class GasyListComponent implements OnInit {
  gasyDataList !: GasyData[];
  constructor(private newGasyData : GasyDataService) {}

  ngOnInit(): void {
    this.gasyDataList=this.newGasyData.getAllGasyData();
  }
}

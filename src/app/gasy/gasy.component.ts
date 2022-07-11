import { Component, Input, OnInit } from '@angular/core';
import { GasyData } from '../models/gasy-data.model';

@Component({
  selector: 'app-gasy',
  templateUrl: './gasy.component.html',
  styleUrls: ['./gasy.component.scss']
})
export class GasyComponent implements OnInit {
  @Input() kapaGasy !: GasyData;
  buttonText !: string;
  cardStatut !: boolean;
  buttonTextShowDetail !: string;

  constructor() {
    this.cardStatut=false;
  }

  ngOnInit(): void {
    this.buttonText ='👍'
    this.buttonTextShowDetail='Show More';
  }
  onSnap(id : number){
    if (this.buttonText==='👍') {
        this.buttonText='👎';
    }
    else{
      this.buttonText='👍';
    }
  }
  onShowMore(){
    this.cardStatut=!this.cardStatut;
    if(this.cardStatut===true){
      this.buttonTextShowDetail='Show Less';
    }
    else this.buttonTextShowDetail='Show More';
  }
}

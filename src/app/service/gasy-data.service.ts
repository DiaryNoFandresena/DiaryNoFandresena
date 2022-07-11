import { Injectable } from '@angular/core';
import { GasyData } from '../models/gasy-data.model';

@Injectable({
  providedIn: 'root'
})
export class GasyDataService {
  gasyData : GasyData[] =[
    {
      id : 1,
      title : 'Kapa 1',
      color : 'Yellow , Brown , Black , White, None, customised',
      snap : 15,
      imageUrl : '../../assets/images/kapa/kapa 1.jpg',
      prix : 20.000
    },
    {
      id : 2,
      title : 'Kapa 2',
      color : 'Brown , Black , White, None, customised',
      snap : 14,
      imageUrl : '../../assets/images/kapa/kapa 2.jpg',
      prix : 20000
    },
    {
      id : 3,
      title : 'Kapa 3',
      color : 'Yellow , Brown , green , Black , White, None, customised',
      snap : 15,
      imageUrl : '../../assets/images/kapa/kapa 3.jpg',
      prix : 20000
    },
    {
      id : 4,
      title : 'Kapa 4',
      color : ' Brown , green , Black , White, None, customised',
      snap : 25,
      imageUrl : '../../assets/images/kapa/kapa 4.jpg',
      prix : 20000
    },
    {
      id : 5,
      title : 'Kito 5',
      color : 'Yellow , Brown , green , Black , White, None, customised',
      snap : 20,
      imageUrl : '../../assets/images/kito/kito 1.jpg',
      prix : 25000
    },
    {
      id : 6,
      title : 'Kito 6',
      color : 'Yellow , Brown , green , Black , White, None, customised',
      snap : 35,
      imageUrl : '../../assets/images/kito/kito 2.jpg',
      prix : 25000
    },
    {
      id : 7,
      title : 'Kito 7',
      color : ' Brown , green , Black , White, None, customised',
      snap : 45,
      imageUrl : '../../assets/images/kito/kito 5.jpg',
      prix : 25000
    },
  ]
  getAllGasyData() : GasyData[] {
    return this.gasyData;
  }
}

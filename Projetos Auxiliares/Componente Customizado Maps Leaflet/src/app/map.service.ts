import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coordenadas } from './map/coordenadas';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public coordenadasBroadcast = new Subject<Coordenadas>();

  constructor() { 
  }

}

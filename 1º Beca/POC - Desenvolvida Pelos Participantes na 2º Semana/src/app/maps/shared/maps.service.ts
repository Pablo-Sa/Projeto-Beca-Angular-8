import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coordinate }from '../model/coordinate.model'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MapsService {
  public coordenadasBroadcast = new Subject<Coordinate>();
  private gymCollection: AngularFirestoreCollection<Coordinate> = this.afs.collection('Coodinate')
constructor(private afs: AngularFirestore) { }

}

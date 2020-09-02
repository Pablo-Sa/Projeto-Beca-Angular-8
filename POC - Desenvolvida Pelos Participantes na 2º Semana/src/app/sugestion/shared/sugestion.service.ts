import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Sugestion } from '../model/sugestion.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugestionService {
  private sugestionCollection: AngularFirestoreCollection<Sugestion> = this.afs.collection('sugestions')
constructor(private afs:AngularFirestore,) { }

  get(): Observable<Sugestion[]> {
    return this.sugestionCollection.valueChanges()

  }


  addSugestion(s:Sugestion) {
    this.sugestionCollection.add(s)
  }
}

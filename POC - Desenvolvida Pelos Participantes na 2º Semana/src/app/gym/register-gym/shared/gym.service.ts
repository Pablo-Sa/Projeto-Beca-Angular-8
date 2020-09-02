import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { GYM } from '../model/gym.model';
import { EquipamentService } from '../../equipament/shared/equipament.service';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private gymCollection: AngularFirestoreCollection<GYM> = this.afs.collection('GYM')
  constructor(private afs: AngularFirestore, private equipamentService: EquipamentService) { }

  addSugestion(s: GYM) {
    this.addEq(s.cep)
    return this.afs.collection('GYM').doc(s.cep).set(s).then(() => { })
  }
  get() {
    return this.gymCollection.valueChanges();
  }
  addEq(g) {
    for (let key in this.equipamentService.cart) {
      var a = this.equipamentService.cart[key]
      this.afs.collection("Equipament").doc(g).set(Object.assign({}, a)).then(() => { })
    }
  }


}

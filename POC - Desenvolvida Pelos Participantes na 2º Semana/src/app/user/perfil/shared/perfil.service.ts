import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Perfil } from '../model/perfil.model';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfilCollection: AngularFirestoreCollection<Perfil> = this.afs.collection('perfil-foto')
  constructor(private afs:AngularFirestore,) {}
    get(): Observable<Perfil[]> {
      return this.perfilCollection.valueChanges()
    }
}

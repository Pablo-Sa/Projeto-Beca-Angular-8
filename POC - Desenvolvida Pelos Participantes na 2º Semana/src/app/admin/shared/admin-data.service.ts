import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sugestion } from 'src/app/sugestion/model/sugestion.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor() { }

  private sugestionSource = new BehaviorSubject({ sugestion: null, key: ''});
  sugestionAtual = this.sugestionSource.asObservable();

  retornarSugestion(sugestion: Sugestion, key: string) {
    this.sugestionSource.next({sugestion: sugestion, key: key});
  }
}

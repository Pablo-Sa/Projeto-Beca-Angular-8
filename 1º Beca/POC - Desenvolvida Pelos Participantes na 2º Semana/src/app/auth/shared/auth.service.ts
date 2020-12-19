import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/user/model/user.model';
import{ AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, throwError, of, } from 'rxjs';
import { switchMap, catchError, switchMapTo, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url: string = 'http://localhost:3000/envio'
  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users')
constructor(private afs:AngularFirestore,
         private afAuth: AngularFireAuth,
         private http:HttpClient) { }


  email(user) {
    return this.http.post(`${this.url}`,user)
  }

  register(user: User): Observable<boolean>{
 return from(this.afAuth.createUserWithEmailAndPassword(user.email, user.password))
 .pipe(switchMap((u:firebase.auth.UserCredential)=>
  this.userCollection.doc(u.user.uid).set({...user, id:u.user.uid}).then(()=>true)
  ),
  catchError((error)=> throwError(error))
)
}



login(email:string, password:string):Observable<User>{
 return from(this.afAuth.signInWithEmailAndPassword(email, password))
 .pipe(
   switchMap((u:firebase.auth.UserCredential)=>this.userCollection.doc<User>(u.user.uid).valueChanges()),
   catchError(()=>throwError('Credenciais inválidas')
   )
 )
}


logout(){
  this.afAuth.signOut();
}
  getUser():Observable<User> {
    return this.afAuth.authState
      .pipe(
        switchMap(u=>(u) ? this.userCollection.doc<User>(u.uid).valueChanges() : of(null))
    )
  }
  authenticate():Observable<boolean> {
    return this.afAuth.authState
      .pipe(map(u=>(u) ? true :false))
  }
 
  loginGoogle():Observable<User> {
    const provider = new auth.GoogleAuthProvider();
    return from(this.afAuth.signInWithPopup(provider)).pipe(
      tap((data) => console.log()),
      switchMap((u: auth.UserCredential) => {
        const newUser:User={
          firstname :u.user.displayName,
          lastname:'',
          email:u.user.email,
          password:'',
          phone: null,
          id: u.user.uid
        }
        return this.userCollection.doc(u.user.uid).set(newUser).then(()=> newUser)
      })
    )

  }
}

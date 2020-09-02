import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/model/user.model';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage, createStorageRef, BUCKET } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { FIREBASE_OPTIONS } from '@angular/fire';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user$: Observable<User>;
  authenticated$: Observable<boolean>;
  selectedFile: File = null;
  fab;
  files: File[] = [];
  downloadURL: Observable<string>;
  public imageUrl:any;
  storageRef: any;
  imagem: string;


  constructor(public authService: AuthService,
  private router:Router,
  private storage: AngularFireStorage,
  private http: HttpClient) {
    this.user$ = this.authService.getUser()
    this.authenticated$ = this.authService.authenticate()
   }

  ngOnInit(): void {
    this.authService.getUser().subscribe((u) =>{
      const id = u.id;
      const urlBase = 'https://firebasestorage.googleapis.com/v0/b/projeto-beca.appspot.com/o/Perfil%2F' + u.id;
      this.http.get(urlBase).subscribe((sucess:any) => {
        const urlImage = urlBase + '?alt=media&token=' + sucess.downloadTokens;
        this.imagem = urlImage;
      });
    });

  }


  onSelect(event) {

    if(this.files.length == 0) {
      this.files.push(...event.addedFiles);
      this.onFileSelected();
    }

  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }


  onFileSelected() {

    this.authService.getUser().subscribe((u) =>{

    const n = u.id;
    const filePath = `Perfil/${n}`;
    const fileRef = this.storage.ref(filePath);
    for (let key in this.files) {
      const task = this.storage.upload(`Perfil/${n}`, this.files[key]);

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fab = url;
              }
              this.storageRef = firebase.storage().ref().child(url).fullPath;
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  });
  }

}

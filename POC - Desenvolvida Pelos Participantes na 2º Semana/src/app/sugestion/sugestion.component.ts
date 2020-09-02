import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Sugestion} from './model/sugestion.model'
import { AuthService } from '../auth/shared/auth.service';
import { SugestionService } from './shared/sugestion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugestion',
  templateUrl: './sugestion.component.html',
  styleUrls: ['./sugestion.component.css']
})
export class SugestionComponent implements OnInit {
  selectedFile: File = null;
  fab;
  files: File[] = [];

  downloadURL: Observable<string>;
  sugestionForm: FormGroup = this.fb.group({
    'type': ['', [Validators.required]],
    'comment': ['', [Validators.required]],
  })


  constructor(private fb: FormBuilder,
    private auhtService: AuthService,
    private sugestioService: SugestionService,
    private snackBar: MatSnackBar,
    private storage: AngularFireStorage,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onSelect(event) {

    this.files.push(...event.addedFiles);
  }
  onRemove(event) {

    this.files.splice(this.files.indexOf(event), 1);
  }
  onRemoveMulti() {
    while (this.files.length) {
      this.files.pop()
    }
  }
  onFileSelected(n) {


    const filePath = `Sugestao/${n}`;
    const fileRef = this.storage.ref(filePath);
    for (let key in this.files) {
      const task = this.storage.upload(`Sugestao/${n}`, this.files[key]);

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fab = url;
              }
              console.log(this.fab);
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  }


  onSubmit(formulario) {

    for (let key in this.files) {
      this.auhtService.getUser().subscribe((u) => {

        const newSuges: Sugestion = {
          type: this.sugestionForm.value.type,
          comment: this.sugestionForm.value.comment,
          uploud: '',
          User: u,
          data: Date.now()
        }
        console.log()

       this.onFileSelected(u.id)

       this.sugestioService.addSugestion(newSuges)
      })
    }

    this.snackBar.open(`${this.sugestionForm.value.type} registrada com sucesso` ,'X',{
      duration:2000,
      verticalPosition:'top',

    });
    this.router.navigate(['/'])
  }

}

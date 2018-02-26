import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  url : string = 'http://localhost:8000/api/spreadsheets/';

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      document: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      console.log('file: ', file)
      reader.onload = () => {
        this.form.get('document').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
        console.log('done?')
      }
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    console.log('form model: ', formModel)
    this.http.post(this.url, formModel, ).toPromise().then((res) => {
      console.log('response: ', res)
    })
  }

  clearFile() {
    this.form.get('document').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  ngOnInit() {
  }

}

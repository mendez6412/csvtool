import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.css']
})
export class SpreadsheetsComponent implements OnInit {
  title = 'Spreadseets';
  url : string = 'http://localhost:8000/api/spreadsheets/';
  spreadsheets = [];

  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get(this.url).toPromise().then((res) => {
      console.log('res: ', res)
      this.spreadsheets = res.json();
    })
  }

}

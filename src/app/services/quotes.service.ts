import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  getQuote(): Observable<Quote> {
    const key = Math.floor(100000 + Math.random() * 900000);
    const url = `https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=${key}&format=json&lang=en`;
    return this.httpClient.get<Quote>(url);
  }
}

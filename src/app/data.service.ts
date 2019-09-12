import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './notes.model'
@Injectable({
    providedIn: 'root'
})

export class DataService {
    apiUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private _http: HttpClient) { }

    getNotes() {
        return this._http.get<Note[]>(this.apiUrl);
    }


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Note } from './notes.model';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private dataService: DataService) { }

    storeNotes() {
        const notes = this.dataService.getNotes();
        this.http.put('https://bsc-max-app.firebaseio.com/notes.json', notes)
            .subscribe(response => {
                console.log(response, "SAVED TO FIREBASE");
            })
    }

    fetchNotes() {
        this.http.get<Note[]>('https://bsc-max-app.firebaseio.com/notes.json')
            .subscribe(notes => {
                this.dataService.setNotes(notes);
                console.log(notes, "LOADED FROM FIREBASE");
            })
    }
}
import { Injectable } from '@angular/core';
import { Note } from './notes.model'
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class DataService {
    notesChanged = new Subject<Note[]>();

    notes: Note[] = [
        new Note(
            "aut facere repellat provident occaecati excepturi optio reprehenderit",
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        ),
        new Note(
            "qui est esse",
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        )
    ];
    getNote(id: number) {
        return this.notes[id];
    }

    addNote(note: Note) {
        this.notes.push(note);
        this.notesChanged.next(this.notes.slice());
    }

    deleteNote(id: number) {
        this.notes.splice(id, 1);
        this.notesChanged.next(this.notes.slice());
    }

    updateNote(index: number, newNote: Note) {
        this.notes[index] = newNote;
        this.notesChanged.next(this.notes.slice());
    }

    constructor() { }




}
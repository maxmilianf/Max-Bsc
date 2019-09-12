import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private dataService: DataService) { }

    storeNotes() {

    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Disk } from './disk-list/Disk';

const URL = 'https://666c703949dbc5d7145e05dd.mockapi.io/api/v1/disks';

@Injectable({
  providedIn: 'root'
})
export class DiskDataService {

  constructor(private http: HttpClient){

  }

    public getAll():Observable<Disk[]>{

      

      return this.http.get<Disk[]>(URL)
        .pipe(
          tap((disks: Disk[])=> disks.forEach(disk => disk.quantity = 0))
         
        );
      
    }
  
  
}

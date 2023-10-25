import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})


export class CountriesServices {

    private apiUrl : string = "https://restcountries.com/v3.1"

    constructor(private http: HttpClient) { }

    searchCapital ( term : string ) : Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
        .pipe(
            catchError( ()=>of ([]) )
        );
    }
}
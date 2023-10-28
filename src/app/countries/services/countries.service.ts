import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})


export class CountriesServices {

    private apiUrl : string = "https://restcountries.com/v3.1"

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode( code : string ) : Observable<Country | null>{

        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map( countries => countries.length > 0 ? countries [0] : null ),
            // transforma la data y si viene uno solo lo convierte en un array solamente
            catchError( ()=>of (null) )
            // Sirve para construir un observable de acuerdo al argumento que yo le mando
        );
    }

    searchCapital ( term : string ) : Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
        .pipe(
            catchError( ()=>of ([]) )
            // Sirve para construir un observable de acuerdo al argumento que yo le mando
        );
    }

    searchCountry(term : string ) : Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
        .pipe(
            catchError ( () => of ([]))
        )
    }

    searchRegion( term : string ): Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
        .pipe(
            catchError (()=> of ([]))
        )
    }
}
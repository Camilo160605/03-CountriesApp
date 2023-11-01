import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})


export class CountriesServices {

    private apiUrl : string = "https://restcountries.com/v3.1"

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode( code : string ) : Observable<Country | null>{
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>( url )
        .pipe(
            map( countries => countries.length > 0 ? countries [0] : null ),
            // transforma la data y si viene uno solo lo convierte en un array solamente
            catchError( ()=>of (null) )
            // Sirve para construir un observable de acuerdo al argumento que yo le mando
        );
    }

    private getCountriesRequest ( url: string ) : Observable<Country[]>{
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(()=> of ([])),
            // delay( 2000 ),
        );
    }

    searchCapital ( term : string ) : Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest( url )
    }

    searchCountry(term : string ) : Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest( url )
    }

    searchRegion( term : string ): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${term}`;
        return this.getCountriesRequest( url )
    }
}
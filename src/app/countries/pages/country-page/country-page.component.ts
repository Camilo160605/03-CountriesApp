import { Component, OnInit, ɵgetUnknownElementStrictMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesServices } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  
  public country? : Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private countriesService : CountriesServices
    ){}

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe( (params ) => {
      // console.log({ params : params ['id'] });
      // Puede funcionar así pero no se maneja un tipado estricto
      // Las llaves cuadran indican que puede o no puede venir
    // })
    // .subscribe ( ({ id }) => {
    //   // console.log({ params : id });
    //   // Misma manera pero una forma mas limpia
    //   this.countriesService.searchCountryByAlphaCode(id)
    //   .subscribe((country) => {
    //     console.log({country});
      // })
    // })
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe ( country => {
        if(!country) return this.router.navigateByUrl('')
        return this.country = country;
    })
  }
}

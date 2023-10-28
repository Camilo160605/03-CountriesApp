import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor( private countriesService : CountriesServices){}

  public countries : Country[] = []

  searchByCountry ( term : string ) : void {
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
      console.log(countries);
    })
  }

}

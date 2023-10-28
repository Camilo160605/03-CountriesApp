import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { count } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  constructor(private countriesService : CountriesServices){}

  searchByRegion ( term : string ): void{
    this.countriesService.searchRegion(term)
    .subscribe(countries =>{
      this.countries = countries;
      console.log(this.countries);
    })
  }

}

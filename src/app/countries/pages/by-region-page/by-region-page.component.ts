import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type  Region = 'Africa' | 'Americas' | 'Asia' | 'Oceania' | 'Europe';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];
  public regions : Region[] = [ 'Africa' , 'Americas' , 'Asia' , 'Oceania' , 'Europe']
  public selectedRegion? : Region;

  constructor(private countriesService : CountriesServices){}

  searchByRegion ( region : Region ): void{
    this.selectedRegion = region;
    this.countriesService.searchRegion(region)
    .subscribe(countries =>{
      this.countries = countries;
    })
  }

}

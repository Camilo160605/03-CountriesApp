import { Component, Input, OnInit } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [

  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries : Country[] = []
  public initialValue : string = '';
  isLoading : boolean = false;

  

  constructor(private countriesService : CountriesServices){}
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term : string): void{

    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe(countries =>{
      this.countries = countries
      this.initialValue = term;
      this.isLoading = false;
    })
  }
}

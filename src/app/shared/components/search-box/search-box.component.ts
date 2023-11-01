import { Component, EventEmitter, Input, Output, OnInit, OnDestroy} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private debounce : Subject<string> = new Subject<string>()
  // Declaramos el debounce como un observable que va a estar escuchando los cambios constantemente
  private debounceSuscribe? : Subscription;
  
  @Input()
  public placeholder : string = '';
  @Output()  
  public onValue = new EventEmitter<string>();
  @Output()  
  public onDebounce = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.debounceSuscribe = this.debounce
    .pipe(
      debounceTime(300)
      // El tiempo que va a esperar el observable para ejecutarse correctamente
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      }
      )
    }

    ngOnDestroy(): void {
      this.debounceSuscribe?.unsubscribe()
    }
    
    onKeyPress(searchTerm : string ) : void {
    this.debounce.next(searchTerm);
    // El next sirve para dar paso a un siguiente funcionamiento
  }
  
  emitValue( value : string ){
    if(!this.onValue) return;
    this.onValue.emit( value )
  }

}

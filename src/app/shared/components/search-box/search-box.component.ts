import { Component, EventEmitter, Input, Output,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder : string = '';
   @Output()  
   public onValue = new EventEmitter<string>();

  
  
  emitValue( value : string ){
    if(!this.onValue) return;
    this.onValue.emit( value )
  }

}

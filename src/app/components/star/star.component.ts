import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
//Input send data to the nested component 
@Input() rating: number = 0; 
cropWidth: number =75; 
//send data back to the container 
@Output() ratingClicked: EventEmitter <string> = 
    new EventEmitter<string>(); 

  constructor() { }

  ngOnChanges(): void {
      this.cropWidth = this.rating * 75/5; 
}
onClick() : void {
    this.ratingClicked.emit(`The rating ${this.rating}`) 
}

}


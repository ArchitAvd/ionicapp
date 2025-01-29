import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
  standalone:false
})
export class FlightPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  flight:any = 
    { airline: 'Air India', from: 'Delhi', to: 'Mumbai', time: '10:00 AM', price: 5000 }
    
  

  bookFlight() {
    console.log('Flight booked:', this.flight);
   
  }

}

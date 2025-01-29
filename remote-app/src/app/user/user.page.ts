import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone:false
})
export class UserPage implements OnInit {

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    joined: 'January 2023',
  };

  constructor(private router: Router) {}

  
  
  
  onClick() {

    
    this.router.navigate(['remote/flight'])
  }
  ngOnInit() {
  }

}

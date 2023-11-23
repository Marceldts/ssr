import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PresentationModule } from '../../presentation.module';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [PresentationModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  constructor(private location: Location, private router: Router){

  }

  ngOnInit(): void {
    console.log("oninit")
  }

  goBack(){
    const locationState = this.location.getState();
    console.log("🚀 ~ file: detail.component.ts:24 ~ DetailComponent ~ goBack ~ locationState:", locationState)
    // if(locationState && locationState.navigationId)
    this.router.navigated
    console.log("🚀 ~ file: detail.component.ts:27 ~ DetailComponent ~ goBack ~ this.router.navigated:", this.router.navigated)
  }
}

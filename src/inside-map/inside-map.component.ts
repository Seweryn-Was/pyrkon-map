import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { InsideMapService} from '../services/insideMapService/inside-map-service.service';
import { OnChanges } from '@angular/core';
import { Hall3Component } from './halls/hall3/hall3.component';
import { Hall5Component } from './halls/hall5/hall5.component';
import { Hall5AComponent } from './halls/hall5-a/hall5-a.component';
import { Hall7Component } from './halls/hall7/hall7.component';

@Component({
  selector: 'app-inside-map',
  standalone: true,
  imports: [CommonModule, Hall3Component, Hall5Component, Hall5AComponent, Hall7Component],
  templateUrl: './inside-map.component.html',
  styleUrl: './inside-map.component.css'
})
export class InsideMapComponent implements OnChanges {
  //services
  insideMapService:InsideMapService = inject(InsideMapService)
  //@Input
  @Input() map:string =""
  ngOnChanges(){
    let path = this.insideMapService.getMapSvgPath(this.map)
    this.message = path==undefined ? "" : path 
  }
  //variables
  message:string="none"
  //constructor 
  constructor(){
  }
  //functions
}

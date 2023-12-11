import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { ProgramDataService } from '../services/programData/program-data.service';
import { Lecture } from '../Interface/lecture';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.css'
})
export class ProgramDetailsComponent {
  id:number = -1; 
  isFound!:boolean; 
  foundLecutre !: Lecture | undefined; 
  lecture!:Lecture; 
  programDataService : ProgramDataService = inject(ProgramDataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(){
    this.id = Number(this.route.snapshot.params['id']);
    this.foundLecutre = this.programDataService.getLectureById(this.id);
    console.log(this.foundLecutre)
    this.isFound = this.foundLecutre === undefined ? false : true
    this.lecture = (this.foundLecutre===undefined? {    
      room: "Empty",
      day: "Empty" ,
      time: new Date(0, 0, 0, 0, 0),
      title: "Empty" ,
      lecturer: `Empty`,
      guests: "",
      description: "Empty" ,
      id:-1,
   } : this.foundLecutre)
    console.log(this.lecture)
    console.log(this.isFound)
  }

}

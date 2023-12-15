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
  id!:number; 
  isFound!:boolean; 
  
  foundLecutre !: Lecture | undefined; 
  lecture!:Lecture; 

  programDataService : ProgramDataService = inject(ProgramDataService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(){
    this.id = Number(this.route.snapshot.params['id']);
    this.foundLecutre = this.programDataService.getLectureById(this.id);

    this.isFound = this.foundLecutre === undefined ? false : true
    this.lecture = (this.foundLecutre===undefined? this.programDataService.returnEmptyLecture(): this.foundLecutre)
  }

}

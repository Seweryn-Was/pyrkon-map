import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { ProgramDataService } from '../services/programData/program-data.service';
import { Lecture } from '../Interface/lecture';

@Component({
  selector: 'app-program-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.css'
})
export class ProgramDetailsComponent {
  id:number = -1; 
  lecutre !: Lecture | undefined; 
  programDataService : ProgramDataService = inject(ProgramDataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(){
    this.id = Number(this.route.snapshot.params['id']);
    this.lecutre = this.programDataService.getLectureById(this.id);
    console.log(this.lecutre)
  }

}

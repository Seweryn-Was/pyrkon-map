import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lecture } from '../Interface/lecture';
import { ProgramDataService } from '../services/programData/program-data.service';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-porgram-table',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './porgram-table.component.html',
  styleUrl: './porgram-table.component.css'
})
export class PorgramTableComponent {
  lectureList : Lecture[] = []; 
  programDataService : ProgramDataService = inject(ProgramDataService)

  constructor(){
    this.lectureList = this.programDataService.getAllLectures(); 
  }
}

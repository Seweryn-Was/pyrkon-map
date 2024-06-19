import { Injectable } from '@angular/core';
import { Lecture } from '../../Interface/lecture';


@Injectable({
  providedIn: 'root'
})
export class ProgramDataService {

  constructor() { 
  }
  protected lectureList :  Lecture[] = [{
    room: "Arena",
    day: "Friday" ,
    time: new Date(2023, 6, 17, 17, 0),
    title: "Jak zacząć z Cosplay" ,
    lecturer: `Marek "Nowi" Nowak`,
    guests: "",
    description: "chcesz zacząć jakoś z cosplayem ale nie wiem jak to jest właśnie to. Przyjdż i sam się przekonaj jak to zrobić" ,
    id:1,
  }, 
{
  room: "Strefa Cosplay",
  day: "Sunday" ,
  time: new Date(2023, 6, 19, 16, 0),
  title: "Manga i jej tajemnice" ,
  lecturer: `Mangozjeb`,
  guests: "",
  description: "dowiedz się o tajemnicach mang i anime" ,
  id:2,
}, 
{
  room: "Aula mała",
  day: "Friday" ,
  time: new Date(2023, 6, 17, 15, 30),
  title: "spotkanie z twóracami gry Titanfall 2" ,
  lecturer: `Random Man`,
  guests: "guest 1 guest 2",
  description: "poznaj twórców Titandall 2" ,
  id: 3,
}, 
{
  room: "Aula mała",
  day: "Friday" ,
  time: new Date(2023, 6, 17, 15, 30),
  title: "jak głupia jest Diuna" ,
  lecturer: `ZAjebisty człek`,
  guests: "guest 1",
  description: "ona naprawdę jest głupia" ,
  id: 4,
}, 
{
  room: "Aula mała",
  day: "Sunday" ,
  time: new Date(2023, 6, 17, 15, 30),
  title: "o magii Titanfall 2" ,
  lecturer: `Gigachad`,
  guests: "",
  description: "poznaj magię Titandall 2" ,
  id: 5,
}, 

]

getAllLectures(): Lecture[]{
  return this.lectureList; 
}
getLectureById(id:number):Lecture | undefined {
  return this.lectureList.find((lectur) => lectur.id === id)

}

returnEmptyLecture(){
  return {    
    room: "Empty",
    day: "Empty" ,
    time: new Date(0, 0, 0, 0, 0),
    title: "Empty" ,
    lecturer: `Empty`,
    guests: "",
    description: "Empty" ,
    id:-1,
 }
}

}

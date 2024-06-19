import { Attribute, Component, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { InsideMapComponent } from '../inside-map/inside-map.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HeaderComponent, InsideMapComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  curretnMiniMap:string =""
  last:any = null
  changeMap(event:any){

    if(this.last!=null){
        this.last.srcElement.classList.remove("current")

      }
      this.last=event

    this.curretnMiniMap = (this.curretnMiniMap === event.target.id) ? "" :event.target.id
    if(this.curretnMiniMap!=""){
      event.srcElement.classList.add("current")
    }


  }
  getId(target:any){
    console.log(target)
    console.log("GETID")
    
    return target.id
  }
}

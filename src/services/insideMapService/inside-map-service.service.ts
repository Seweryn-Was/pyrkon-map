import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsideMapService {

  insidemap = new Map<string,string>()

  constructor() {     
    this.insidemap.set("7A", `<b>test7A</b>`)
    this.insidemap.set("8A", `<b>test8A</b>`)

  }

  getMapSvgPath(id:string){
    return this.insidemap.get(id)
  }
}

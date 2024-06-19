import { RouterModule, Routes } from '@angular/router';
import { PorgramTableComponent } from '../porgram-table/porgram-table.component';
import { ProgramDetailsComponent } from '../program-details/program-details.component';
import { MapComponent } from '../map/map.component';
import { NgModule } from '@angular/core';
import { ExhibitorsComponent } from '../exhibitors/exhibitors.component';

const routes: Routes = [
    {
        path:"",
        pathMatch: "full",
        redirectTo:"/program"
    },
    {
        path: "program",
        component: PorgramTableComponent,

    }, 
    {
        path: "program/details/:id",
        component: ProgramDetailsComponent,
    },
    {
        path: "map",
        component: MapComponent,
    },
    {
        path:"exhibitors",
        component: ExhibitorsComponent ,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})


export class AppRoutingModule{

}
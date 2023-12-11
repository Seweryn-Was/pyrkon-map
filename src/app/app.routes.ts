import { RouterModule, Routes } from '@angular/router';
import { PorgramTableComponent } from '../porgram-table/porgram-table.component';
import { ProgramDetailsComponent } from '../program-details/program-details.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})


export class AppRoutingModule{

}
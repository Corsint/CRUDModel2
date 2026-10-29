import { Routes } from '@angular/router';
import { RopaList } from './ropa/features/ropa-list/ropa-list';
import { RopaForm } from './ropa/features/ropa-form/ropa-form';
import { RopaDetails } from './ropa/features/ropa-details/ropa-details';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "ropa",
        pathMatch: "full"
    },
    {
        path: "ropa",
        component: RopaList
    },
    {
        path: "agregarRopa",
        component: RopaForm
    },
    {
        path: "detalleRopa/:id",
        component: RopaDetails
    },
    {
        path:"**",
        redirectTo:"ropa"
    }
];

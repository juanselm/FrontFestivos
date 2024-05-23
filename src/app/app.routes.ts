import { Routes } from '@angular/router';
import { FestivosComponent } from './features/components/festivos/festivos.component';
import { InicioComponent } from './features/components/inicio/inicio.component';

export const routes: Routes = [
    {path: "home", component: InicioComponent},
    {path: "holidays", component: FestivosComponent},
];

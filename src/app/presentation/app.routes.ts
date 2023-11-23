import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokelist',
        pathMatch: 'full'
    },
    {
        path: 'pokelist',
        loadComponent: () => import('./features/pokelist/pokelist.component').then( m => m.PokelistComponent)
    }
];

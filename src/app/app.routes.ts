import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokelist',
        loadComponent: () => import('./pages/pokelist/pokelist.component').then( m => m.PokelistComponent)
    }
];

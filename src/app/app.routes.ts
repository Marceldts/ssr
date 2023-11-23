import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokelist',
        loadComponent: () => import('./presentation/features/pokelist/pokelist.component').then( m => m.PokelistComponent)
    },
    {
        path: '',
        redirectTo: 'pokelist',
        pathMatch: 'full'
    }
];

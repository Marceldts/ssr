import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokelist',
        loadComponent: () => import('./presentation/features/pokelist/pokelist.component').then( m => m.PokelistComponent)
    },
    {
        path: 'detail/:id',
        loadComponent: () => import('./presentation/features/detail/detail.component').then(m => m.DetailComponent)
    },
    {
        path: '',
        redirectTo: 'pokelist',
        pathMatch: 'full'
    }
];

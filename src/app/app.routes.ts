import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'parabens',
    loadComponent: () => import('./pages/parabens/parabens.page').then( m => m.ParabensPage)
  },
  {
    path: 'momentos',
    loadComponent: () => import('./pages/momentos/momentos.page').then( m => m.MomentosPage)
  },
];

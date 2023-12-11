import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: "full"},
  {
    path: 'share',
    loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
  },
  {path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

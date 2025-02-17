import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RubroComponent } from './rubro/rubro.component';
import { DonacionComponent } from './donacion/donacion.component';

export const routes: Routes = [
    { path: '', component: ProyectoComponent, pathMatch: 'full'},
    { path: 'proyecto', component: ProyectoComponent, pathMatch: 'full'},
    { path: 'rubro', component: RubroComponent, pathMatch: 'full'},
    { path: 'donacion', component: DonacionComponent, pathMatch: 'full'},
    { path: '**',  redirectTo: 'proyecto', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {
  }
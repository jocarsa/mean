import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {SobremiComponent} from './sobremi/sobremi.component'
import {ProyectosComponent} from './proyectos/proyectos.component'
import {ContactoComponent} from './contacto/contacto.component'
import {BlogComponent} from './blog/blog.component'
import {EnviacontactoComponent} from './enviacontacto/enviacontacto.component'

const routes: Routes = [
    {path: '',component:InicioComponent},
    {path: 'inicio',component:InicioComponent},
    {path: 'sobremi',component:SobremiComponent},
    {path: 'proyectos',component:ProyectosComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'blog',component:BlogComponent},
    {path: 'enviacontacto',component:EnviacontactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

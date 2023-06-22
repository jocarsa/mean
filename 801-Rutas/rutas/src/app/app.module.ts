import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { PancartaComponent } from './pancarta/pancarta.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { RazonesComponent } from './razones/razones.component';
import { MenuComponent } from './menu/menu.component';
import { EnviacontactoComponent } from './enviacontacto/enviacontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobremiComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    ProyectosComponent,
    ContactoComponent,
    BlogComponent,
    PancartaComponent,
    DestacadosComponent,
    RazonesComponent,
    MenuComponent,
    EnviacontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EntradaComponent } from './componentes/entrada/entrada.component';
import { PracticosComponent } from './componentes/practicos/practicos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BotoneraComponent } from './componentes/botonera/botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    EntradaComponent,
    PracticosComponent,
    FooterComponent,
    BotoneraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

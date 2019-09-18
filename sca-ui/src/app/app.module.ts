import { SegurancaModule } from './seguranca/seguranca.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';

import { CoreModule } from './core/core.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { AtivosModule } from './ativos/ativos.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarragensModule } from './barragens/barragens.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    CoreModule,

    AtivosModule,
    ManutencoesModule,
    BarragensModule,
    CategoriasModule,
    SegurancaModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

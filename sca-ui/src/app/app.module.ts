import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { AtivosModule } from './ativos/ativos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    // Documentação do toastr exibição de mensagens.
    // https://www.npmjs.com/package/ngx-toastr
    ToastrModule.forRoot(),
    ConfirmDialogModule,

    CoreModule,

    AtivosModule,
    ManutencoesModule,
    CategoriasModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

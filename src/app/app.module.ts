import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http"; //módulo necessário para fazer requisições HTTP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule  } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //PrimeNG
    CardModule, //card aonde colocaremos o formulário
    InputTextModule,
    ButtonModule,
    ToastModule, //para notificações que são exibidas para o usuário (para nao ser aquele alerta padrao do navegador)
  ],
  providers: [CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
 

@NgModule({
  declarations: [//Componentes, Directivas, pipes
    AppComponent 
  ],
  imports: [//Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:InjectSessionInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

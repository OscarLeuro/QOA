import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from '@angular/fire/compat';
import { ModalRegisterComponent } from './login/modal-register/modal-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    LoginComponent,
    ModalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebasekey)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

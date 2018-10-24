import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes externos
import { InputTextModule } from 'primeng/inputtext';
import { GrowlModule } from 'primeng/growl';
import { MessagesModule } from 'primeng/messages';
import { NgxMaskModule } from 'ngx-mask'

//Componentes internos
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpecialtiesComponent } from './specialties/specialties.component';

//Rotas
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    SpecialtiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    GrowlModule,
    HttpClientModule,
    MessagesModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

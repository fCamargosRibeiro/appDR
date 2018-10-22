import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask'
import { GrowlModule } from 'primeng/growl';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { routes } from './app.router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SpecialtiesComponent } from './specialties/specialties.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    SpecialtiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    ButtonModule,
    CardModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    CheckboxModule,
    MatInputModule,
    HttpClientModule,
    ContextMenuModule,
    GrowlModule,
    AccordionModule,
    InputTextModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

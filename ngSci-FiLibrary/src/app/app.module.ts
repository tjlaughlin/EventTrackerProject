import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SciFiLibraryComponent } from './components/sci-fi-library/sci-fi-library.component';
import { FormsModule } from '@angular/forms';
import { SciFiLibraryService } from './services/sci-fi-library.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    SciFiLibraryComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MDBBootstrapModule.forRoot()
  ],
  providers: [
    SciFiLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

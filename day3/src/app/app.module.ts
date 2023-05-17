import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComp } from './header.component';
import { ProductComp } from './product.component';
import { FooterComp } from './footer.component';
import { NavbarComp } from './navbar.component';
import { MainComp } from './main.component';
import { BannerComp } from './banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComp,
    BannerComp,
    HeaderComp,
    MainComp,
    ProductComp,
    FooterComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

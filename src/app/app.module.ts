import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogobannerComponent } from './logobanner/logobanner.component';
import { MainComponent } from './main/main.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LogobannerComponent,
    MainComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

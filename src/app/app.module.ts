import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuToggleDirective } from './header/menu-toggle.directive';
import { SearchPageComponent } from './search-page/search-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { WhatsHotPageComponent } from './whats-hot-page/whats-hot-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuToggleDirective,
    SearchPageComponent,
    ListPageComponent,
    WhatsHotPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

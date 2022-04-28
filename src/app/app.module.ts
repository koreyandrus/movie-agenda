import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuToggleDirective } from './header/menu-toggle.directive';
import { SearchPageComponent } from './search-page/search-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { WhatsHotPageComponent } from './whats-hot-page/whats-hot-page.component';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { CreateListComponent } from './list-page/create-list/create-list.component';
import { ListSidebarComponent } from './list-page/list-sidebar/list-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuToggleDirective,
    SearchPageComponent,
    ListPageComponent,
    WhatsHotPageComponent,
    MovieComponent,
    MovieDetailsComponent,
    CreateListComponent,
    ListSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { SearchMusicService } from './services/searchmusic.service';
import { AppComponent }  from     './app.component';
import { NavbarComponent } from   './components/navbar/navbar.component';
import { SearchComponent } from   './components/search/search.component';
import { AboutComponent } from   './components/about/about.component';

import * as _ from 'underscore';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
                  routing ], 
  declarations: [ AppComponent, 
                  NavbarComponent, SearchComponent, AboutComponent ],
  providers:    [ SearchMusicService ],
  exports : [  ],
  schemas: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
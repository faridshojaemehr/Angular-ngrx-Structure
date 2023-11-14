import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserComponent } from './pages/users/user/user.component';
import { RouterModule, RouterOutlet, Routes} from "@angular/router";
import {redusers} from "./store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


const route : Routes = [
  {path:'user',component: UserComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(redusers, {}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(route),
    RouterOutlet,
    StoreDevtoolsModule.instrument({ maxAge: 10, logOnly: !isDevMode() }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

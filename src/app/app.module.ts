import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserComponent } from './pages/users/user/components/user.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { redusers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserService } from './pages/users/user/service/user.service';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(redusers, {}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(route),
    RouterOutlet,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 10, logOnly: !isDevMode() }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

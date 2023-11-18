import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/components/user.component';
import { UserService } from './user/service/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/store/users/user.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UserEffects]),
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class UsersModule {}

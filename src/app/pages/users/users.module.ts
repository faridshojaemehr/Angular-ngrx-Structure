import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/components/user.component';
import { UserService } from './user/service/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/store/users/user.effects';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserService],
})
export class UsersModule {}

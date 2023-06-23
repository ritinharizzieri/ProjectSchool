import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  exports:[
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[]
})
export class UsersMaterialModule { }

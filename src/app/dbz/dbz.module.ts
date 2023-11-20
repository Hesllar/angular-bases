import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MianPageComponent } from './pages/main-page.compoment';




@NgModule({
  exports:[
    MianPageComponent
  ],
  declarations: [
    MianPageComponent,
    ListComponent,
    AddCharacterComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

import { NgModule } from "@angular/core";
import { GGNavigationComponent } from "./navigation.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    GGNavigationComponent,
  ],
  exports: [
    GGNavigationComponent
  ]
})

export class GGNavigationModule {}
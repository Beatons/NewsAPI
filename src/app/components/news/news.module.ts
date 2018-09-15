import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GGNewsComponent } from "./news.component";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  declarations:[
    GGNewsComponent,
  ],
  exports: [
    GGNewsComponent
  ]
})

export class GGNewsModule {}
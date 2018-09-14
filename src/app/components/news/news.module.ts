import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GGNewsComponent } from "./news.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations:[
    GGNewsComponent,
  ],
  exports: [
    GGNewsComponent
  ]
})

export class GGNewsModule {}
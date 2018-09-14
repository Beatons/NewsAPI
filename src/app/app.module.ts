//angular libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//external libs
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
//modules
import { GGNavigationModule } from './components/navigation/navigation.module';
import { GGNewsModule } from './components/news/news.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GGNavigationModule,
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    GGNewsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

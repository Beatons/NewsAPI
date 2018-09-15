//angular libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//external libs
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
//modules
import { GGNewsModule } from './components/news/news.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GGNewsComponent } from './components/news/news.component';
import { GGNavigationComponent } from './components/navigation/navigation.component';
import { FeedStoreService } from './services/feed-store.service';

const routes:Routes = [
  {
    path: 'home',
    component: GGNewsComponent
  },
  {
    path: ':id',
    component: GGNewsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: "/home",

  }
];


@NgModule({
  declarations: [
    AppComponent,
    GGNavigationComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    GGNewsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FeedStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

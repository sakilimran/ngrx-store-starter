import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article.component';
import { reducers, metaReducers } from './reducers/reducers';



@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

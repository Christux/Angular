import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMainComponent } from './app.component';
import { GameOfLifeModule } from './gameoflife/gol.module';

@NgModule({
  imports: [BrowserModule, GameOfLifeModule],
  exports: [],
  declarations: [AppMainComponent],
  bootstrap: [AppMainComponent]
})
export class AppModule {
}




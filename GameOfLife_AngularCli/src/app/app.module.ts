import { NgModule } from '@angular/core';
import { GameOfLifeModule } from './core/gameoflife.module';
import { AppMainComponent } from './app.component';
import 'hammerjs';

@NgModule({
  imports: [
    GameOfLifeModule
  ],
  declarations: [AppMainComponent],
  bootstrap: [AppMainComponent]
})
export class AppModule {
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KonamiModule } from 'ngx-konami';
import { GameOfLifeService } from "./gameoflife.service";
import { GameOfLifeComponent } from "./gameoflife.component";
import { RemoteModule } from "../remote/remote.module";
import { HeaderBarModule } from "../headerbar/headerbar.module";
import { GridModule } from "../grid/grid.module";

@NgModule({
	imports: [
		BrowserModule,
    	FlexLayoutModule,
		HeaderBarModule,
		GridModule,
		RemoteModule,
		KonamiModule
	],
	exports: [GameOfLifeComponent],
	declarations: [GameOfLifeComponent],
	providers: [GameOfLifeService],
})
export class GameOfLifeModule {
}

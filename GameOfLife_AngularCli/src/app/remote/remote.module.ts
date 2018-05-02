import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule, MatSliderModule } from "@angular/material";
import { RemoteComponent } from "./remote.component";

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatTooltipModule,
		MatSliderModule
	],
	declarations: [RemoteComponent],
	exports: [RemoteComponent],
	providers: [],
	entryComponents: []
})
export class RemoteModule {
}

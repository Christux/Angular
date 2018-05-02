import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBarComponent, AboutDialogComponent } from "./headerbar.component";
import { MatToolbar, MatToolbarModule, MatButtonModule, MatDialogModule } from "@angular/material";

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatDialogModule],
	declarations: [HeaderBarComponent, AboutDialogComponent],
	exports: [HeaderBarComponent],
	providers: [],
	entryComponents: [AboutDialogComponent]
})
export class HeaderBarModule {
}

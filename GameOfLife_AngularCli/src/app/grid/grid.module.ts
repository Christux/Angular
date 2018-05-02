import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { GridComponent } from "./grid.component";
import { CellComponent } from "./cell.component";


@NgModule({
	imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
	declarations: [GridComponent, CellComponent],
	exports: [GridComponent],
	providers: []
})
export class GridModule {
}

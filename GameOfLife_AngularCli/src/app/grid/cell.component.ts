import { Component, Input } from "@angular/core";
import { Cell } from "../shared/gameoflife/cell";

@Component({
	selector: 'app-gol-cell',
	templateUrl: 'cell.component.html',
	styleUrls: ['cell.component.css']
})
export class CellComponent {

	@Input() cell: Cell;

	isAlive(): boolean {
		return this.cell.isAlive();
	}

	toggleCell() {
		if (this.cell.isAlive()) {
			this.cell.kill();
		} else {
			this.cell.awake();
		}
	}
}

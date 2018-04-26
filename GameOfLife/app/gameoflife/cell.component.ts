import { Component, Input } from "@angular/core";
import { Cell } from "./shared/cell";

@Component({
	moduleId: module.id,
	selector: 'gol-cell',
	templateUrl: 'cell.component.html',
	styleUrls: ['cell.component.css']
})
export class CellComponent {

	@Input() cell: Cell;

	isAlive() {
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

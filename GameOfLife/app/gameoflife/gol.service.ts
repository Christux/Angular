import { Injectable } from "@angular/core";
import { AGameOfLife, IGameOfLife } from "./shared/gameoflife";
import { Cell } from "./shared/cell";

@Injectable()
export class GameOfLifeService extends AGameOfLife implements IGameOfLife {

	constructor() {
		super(30, 50);
	}
	rules(cell: Cell) {

		if (!cell.isAlive() && cell.getNeighboor() === 3) {
			cell.awake();
		} else {

			if (cell.isAlive() && (cell.getNeighboor() === 2 || cell.getNeighboor() === 3)) {
				cell.awake();
			} else {
				cell.kill();
			}
		}
	}
}



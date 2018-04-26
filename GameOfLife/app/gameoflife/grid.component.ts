import { Component, Inject, OnDestroy } from "@angular/core";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';
import { GameOfLifeService} from "./gol.service";
import { Cell } from "./shared/cell";

@Component({
	moduleId: module.id,
	selector: 'gol-grid',
	templateUrl: 'grid.component.html'
})
export class GridComponent implements OnDestroy {

	m: number;
	n: number;
	rows: number [];
	cols: number [];

	isRunning: boolean;

	constructor(private gameOfLifeService: GameOfLifeService) {
		this.m = gameOfLifeService.getNumberOfRows();
		this.n = gameOfLifeService.getNumberOfColumn();

		this.rows = [];
		this.cols = [];

		for (let i = 0; i < this.m; i++) {
			this.rows.push(i);
		}

		for (let j = 0; j < this.n; j++) {
			this.cols.push(j);
		}

		this.isRunning = false;
	}

	getCell(i: number, j: number): Cell {
		return this.gameOfLifeService.getCell(i, j);
	}

	play() {
		this.isRunning = !this.isRunning;

		if (this.isRunning) {
			TimerObservable.create(200, 400)
				.takeWhile(() => this.isRunning)
				.subscribe(() => {
					this.gameOfLifeService.nextStep();
				});
		}
	}

	clear() {
		this.isRunning = false;
		this.gameOfLifeService.reset();
	}

	ngOnDestroy() {
		this.isRunning = false;
	}

}

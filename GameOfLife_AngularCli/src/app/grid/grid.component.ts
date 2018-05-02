import { Component, Inject, Input, OnInit } from "@angular/core";
import { Cell } from "../shared/gameoflife/cell";

@Component({
	selector: 'app-gol-grid',
	templateUrl: 'grid.component.html'
})
export class GridComponent implements OnInit {

	@Input() m: number;
	@Input() n: number;
	@Input() getCell: (i: number, j: number ) => Cell;

	rows: number [];
	cols: number [];

	isRunning: boolean;

	constructor() {
		this.rows = [];
		this.cols = [];
		this.isRunning = false;
	}
	ngOnInit() {
		for (let i = 0; i < this.m; i++) {
			this.rows.push(i);
		}

		for (let j = 0; j < this.n; j++) {
			this.cols.push(j);
		}
	}
}

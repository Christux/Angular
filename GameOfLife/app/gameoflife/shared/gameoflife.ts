import { CellGrid } from "./cellgrid";
import { Cell } from "./cell";

export interface IGameOfLife {
	nextStep(): void;
	reset(): void;
}

export abstract class AGameOfLife {

	private _m: number;
	private _n: number;
	private _cells: CellGrid;
	constructor(m: number, n: number) {
		this._m = m;
		this._n = n;
		this._cells = new CellGrid(this._m, this._n);
	}

	getNumberOfRows() {
		return this._m;
	}

	getNumberOfColumn() {
		return this._n;
	}

	getCell (i: number, j: number): Cell {
		return this._cells.getCell(i, j);
	}

	abstract rules(cell: Cell): void;

	nextStep() {

		this._computeNeighboors();

		for (let i = 0; i < this._m; i++) {
			for (let j = 0; j < this._n; j++) {
				this.rules(this._cells.getCell(i, j));
			}
		}
	}

	reset() {

		for (let i = 0; i < this._m; i++) {
			for (let j = 0; j < this._n; j++) {
				this._cells.killCell(i, j);
			}
		}
	}
	private _computeNeighboors() {

		for (let i = 0; i < this._m; i++) {
			for (let j = 0; j < this._n; j++) {
				this._cells.countNeighboors(i, j);
			}
		}
	}
}

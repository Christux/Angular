import { Cell } from "./cell";

export class CellGrid {
	private _m: number;
	private _n: number;
	private _cellGrid: Cell[];
	constructor(m: number, n: number) {
		this._m = m;
		this._n = n;

		this._cellGrid = [];

		for (let i = 0, l = n * m; i < l; i++) {
			this._cellGrid.push(new Cell());
		}
	}
	killCell (i: number, j: number) {
		this._cellGrid[i * this._n + j].kill();
	}
	awakeCell (i: number, j: number) {
		this._cellGrid[i * this._n + j].awake();
	}
	isAlive (i: number, j: number) {

		if (i < 0 || j < 0 || i >= this._m || j >= this._n) {
			return false;
		} else {
			return this._cellGrid[i * this._n + j].isAlive();
		}
	}
	getCell (i: number, j: number) {
		return this._cellGrid[i * this._n + j];
	}

	getNeighboor (i: number, j: number) {
		return this._cellGrid[i * this._n + j].getNeighboor();
	}

	countNeighboors (i: number, j: number) {
		let count = 0;

		for (let m = 0; m < 3; m++) {
			for (let n = 0; n < 3; n++) {

				if (this.isAlive(i + m - 1, j + n - 1)) {
					count++;
				}
			}
		}

		if (this.isAlive(i, j)) {
			count--;
		}

		this._cellGrid[i * this._n + j].setNeighboor(count);
	}
}

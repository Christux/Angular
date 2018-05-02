export class Cell {
	private _isAlive: boolean;
	private _nbNeighboors: number;

	constructor() {
		this._isAlive = false;
		this._nbNeighboors = 0;
	}

	isAlive() {
		return this._isAlive;
	}

	kill() {
		this._isAlive = false;
	}
	awake() {
		this._isAlive = true;
	}

	randomize() {
		this._isAlive = Math.floor(Math.random() * 2) === 0;
	}

	setNeighboor(value: number) {
		this._nbNeighboors = value;
	}
	getNeighboor() {
		return this._nbNeighboors;
	}
}

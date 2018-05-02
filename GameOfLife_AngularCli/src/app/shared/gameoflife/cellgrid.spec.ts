import { CellGrid } from "./cellgrid";

describe('CellGridClass', () => {

	const grid = new CellGrid(4, 6);

	beforeEach(() => {

		// ......
		// ......
		// .###..
		// ......

		grid.reset();
		grid.getCell(2, 1).awake();
		grid.getCell(2, 2).awake();
		grid.getCell(2, 3).awake();
	});

	it('check cell statuses', () => {

		expect(grid.getCell(2, 1).isAlive()).toBeTruthy();
		expect(grid.getCell(2, 2).isAlive()).toBeTruthy();
		expect(grid.getCell(1, 2).isAlive()).toBeFalsy();
	});

	it('count neighboors', () => {

		grid.countNeighboors();

		expect(grid.getCell(1, 0).getNeighboor()).toBe(1);
		expect(grid.getCell(1, 2).getNeighboor()).toBe(3);
		expect(grid.getCell(1, 5).getNeighboor()).toBe(0);
	});

});

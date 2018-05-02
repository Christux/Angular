import { Cell } from "./cell";

describe('CellClass', () => {

	const cell = new Cell();

	it('new cell must be dead', () => {
		expect(cell.isAlive()).toBeFalsy();
	});

	it(`awaiked cell must be alive`, () => {
		cell.awake();
		expect(cell.isAlive()).toBeTruthy();
	});

	it('killed cell must be dead', () => {
		cell.kill();
		expect(cell.isAlive()).toBeFalsy();
	});

});

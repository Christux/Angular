import { ClassicGameOfLife } from "./gameoflife";

describe('ClassicGameOfLifeClass', () => {

	const gol = new ClassicGameOfLife(4, 6);

	beforeEach(() => {

		// ......
		// ......
		// .###..
		// ......

		gol.reset();
		gol.getCell(2, 1).awake();
		gol.getCell(2, 2).awake();
		gol.getCell(2, 3).awake();
	});

	it('first step calculation', () => {

		gol.nextStep();

		// ......
		// ..#...
		// ..#...
		// ..#...

		expect(gol.getCell(2, 1).isAlive()).toBeFalsy();
		expect(gol.getCell(2, 2).isAlive()).toBeTruthy();
		expect(gol.getCell(1, 2).isAlive()).toBeTruthy();
	});

	it('second step calculation', () => {

		gol.nextStep();
		gol.nextStep();

		// ......
		// ......
		// .###..
		// ......

		expect(gol.getCell(2, 1).isAlive()).toBeTruthy();
		expect(gol.getCell(2, 2).isAlive()).toBeTruthy();
		expect(gol.getCell(1, 2).isAlive()).toBeFalsy();
	});

});

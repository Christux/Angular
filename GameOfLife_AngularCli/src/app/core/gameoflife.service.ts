import { Injectable } from "@angular/core";
import { ClassicGameOfLife } from "../shared/gameoflife/gameoflife";

@Injectable()
export class GameOfLifeService extends ClassicGameOfLife {

	constructor() {
		super(30, 50);
	}
}



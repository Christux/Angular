import { Component, OnDestroy } from '@angular/core';
import { GameOfLifeService } from './gameoflife.service';
import { Cell } from '../shared/gameoflife/cell';

@Component({
	selector: 'app-game-of-life',
	templateUrl: 'gameoflife.component.html'
})
export class GameOfLifeComponent implements OnDestroy {
	title = 'Game Of Life';
	m: number;
	n: number;
	isRunning: boolean;
	speed: number;
	private currentInterval: any;

	constructor(public gameOfLifeService: GameOfLifeService) {
		this.m = this.gameOfLifeService.getNumberOfRows();
		this.n = this.gameOfLifeService.getNumberOfColumn();
		this.isRunning = false;
		this.speed = 20;
	}

	ngOnDestroy(): void {
		this.resetTimer();
	}

	getCell(i: number, j: number): Cell {
		return this.gameOfLifeService.getCell(i, j);
	}
	play() {

		if (this.isRunning) {
			this.resetTimer();
		} else {
			this.startTimer();
		}
	}

	clear() {
		this.resetTimer();
		this.gameOfLifeService.reset();
	}

	randomize() {
		this.gameOfLifeService.randomize();
	}

	sayHello() {
		this.title = "Hello";
	}

	setSpeed(value: number) {
		this.speed = value;

		if (this.isRunning) {
			this.restartTimer();
		}
	}

	private setTimer() {
		return 8000 / this.speed;
	}

	private restartTimer() {
		this.resetTimer();
		this.startTimer();
	}

	private startTimer() {
		if (!this.isRunning) {
			this.isRunning = true;
			const interval = this.setTimer();

			this.currentInterval = setInterval(() => {
				this.gameOfLifeService.nextStep();
			}, interval);
		}
	}

	private resetTimer() {
		if (this.isRunning) {
			this.isRunning = false;
			if (this.currentInterval) {
				clearInterval(this.currentInterval);
				this.currentInterval = null;
			}
		}
	}

}

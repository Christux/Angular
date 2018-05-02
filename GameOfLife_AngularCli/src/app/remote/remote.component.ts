import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
	selector: 'app-remote',
	templateUrl: 'remote.component.html',
	styleUrls: ['remote.component.css']
})
export class RemoteComponent {

	@Input() play: () => void;
	//@Output() play = new EventEmitter();
	@Input() clear: () => void;
	@Input() rand: () => void;
	@Input() setSpeed: (speed: number) => void;
	@Input() isRunning: boolean;
	@Input() speed: number;
	onSpeedChange($event: any) {
		this.setSpeed($event.value);
	}
}

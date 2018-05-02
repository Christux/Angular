import { Component, Input, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
	selector: 'app-header-bar',
	templateUrl: 'headerbar.component.html',
	styleUrls: ['headerbar.component.css']
})
export class HeaderBarComponent {

	constructor(public dialog: MatDialog) {
	}

	@Input() title: string;

	openDialog(): void {
		const dialogRef = this.dialog.open(AboutDialogComponent, {
			width: '250px',
			data: { title: this.title }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}

@Component({
	selector: 'app-about-dialog',
	template: '<h1>{{title}}</h1>',
})
export class AboutDialogComponent {

	title: string;
	constructor(
		public dialogRef: MatDialogRef<AboutDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {
			this.title = data.title;
		}

	onNoClick(): void {
		this.dialogRef.close();
	}
}

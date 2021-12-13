import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  dialogLogin() {
    const dialog = new MatDialogConfig;
    dialog.disableClose = false;
    dialog.width = '20rem';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      LoginDialogComponent,
      dialog
    );
  }


}

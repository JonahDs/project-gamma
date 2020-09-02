import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSetting } from '../dialog-settings';

@Component({
  selector: 'app-dialog-inject',
  templateUrl: './dialog-inject.component.html',
  styleUrls: ['./dialog-inject.component.scss'],
})
export class DialogInjectComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogInjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSetting
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

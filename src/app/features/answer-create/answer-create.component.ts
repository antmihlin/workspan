import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  newAnswer: string;
}

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.scss']
})
export class AnswerCreateComponent {

  constructor(
    public dialogRef: MatDialogRef<AnswerCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatToolbarModule,MatCardModule,MatGridListModule,MatIconModule,MatDividerModule,MatDialogModule,MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuestionComponent } from './features/question/question.component';
import { AnswerComponent } from './features/answer/answer.component';
import { QuestionListComponent } from './features/question-list/question-list.component';

//Services
import {AnswerService} from './services/answer.service'; 
import {QuestionService} from './services/question.service';
import { AnswerCreateComponent } from './features/answer-create/answer-create.component';
import { ReversePipe } from './pipes/reverse.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionListComponent,
    AnswerCreateComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	AppRoutingModule,
	FlexLayoutModule,
	MatButtonModule, 
	MatToolbarModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatDividerModule,
	MatDialogModule,
	MatInputModule,
	FormsModule
  ],
  providers: [
	AnswerService,
	QuestionService
  ],
  entryComponents: [AnswerCreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

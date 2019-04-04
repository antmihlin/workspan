import {Component, OnInit,OnDestroy} from '@angular/core';

import { QuestionService } from '../../services/question.service';

@Component({
	selector: 'app-question-list',
	templateUrl: './question-list.component.html',
	styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit,OnDestroy {

	questions:Array<any>;
	private questionsSub:any;

	constructor(
		private _question:QuestionService
	) {}

	ngOnInit() {
		this.getQuestions();
	}
	
	ngOnDestroy(){
		this.questionsSub.unsubscribe();
	};
	
	private getQuestions(){
		this.questionsSub = this._question.findAll().subscribe( data =>{
			this.questions = data;
		} );
	};
}

import {Component, OnInit,OnDestroy} from '@angular/core';

import {MatDialog} from '@angular/material';

import {ActivatedRoute} from '@angular/router';

import {QuestionService} from '../../services/question.service';
import {AnswerService} from '../../services/answer.service';

import {AnswerCreateComponent} from '../answer-create/answer-create.component';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
	
	public id:any;
	public question:any;
	public answers:any;
	public newAnswer: string;
	
	public upvoted:boolean=false;
	public downvoted:boolean=false;
	
	private routerParamsSub:any;
	private questionSub:any;
	private answersSub:any;

	constructor(
		private route: ActivatedRoute,
		private _question: QuestionService,
		private _answer: AnswerService,
		public dialog: MatDialog
		) {}

	ngOnInit() {
		this.routerParamsSub = this.route.params.subscribe(params => {
			this.id = params['id']; 
			this.getQuestion(this.id);
			this.getAnswers(this.id);
		});
	}

	ngOnDestroy() {
		this.routerParamsSub.unsubscribe();
		this.questionSub.unsubscribe();
		this.answersSub.unsubscribe();
	}
	
	private getQuestion(id){
		this.questionSub = this._question.findOne(id).subscribe( data=>{
			this.question = data;
		});		
	};
	private getAnswers(questionId){
		this.answersSub = this._answer.findAll(questionId).subscribe( data=>{
			this.answers = data;
		});
	};
		
	public upvote(){
		this.question.upvotes = + this.question.upvotes +1;
		if(this.downvoted) this.question.downvotes = + this.question.downvotes -1;
		this.upvoted = true;
		this.downvoted = false;
	};
	public downvote(){
		this.question.downvotes = + this.question.downvotes +1;
		if(this.upvoted) this.question.upvotes = + this.question.upvotes -1;
		this.upvoted = false;
		this.downvoted = true;
	};
			
	months:Array<string> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];	
	
	openDialog(): void {
		const dialogRef = this.dialog.open(AnswerCreateComponent, {
			width: '70%',
			data: { newAnswer: this.newAnswer}
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result){
				console.log('The dialog was closed');
				this.newAnswer = result;

				const now = new Date();
				const year = now.getFullYear().toString().substr(-2);
				const month = now.getMonth();
				const day = now.getDate();
				const hour = now.getHours();
				const minute = now.getMinutes();
				const time = `${day}/${this.months[month]}/${year} ${hour}:${minute}`;
				
				this.answers.unshift({
					text:this.newAnswer,
					createdBy:'Anonymus',
					createdAt:time,
					upvotes:0,
					downvotes:0
				});
			}
		});
	}
}

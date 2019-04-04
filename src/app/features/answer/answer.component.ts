import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-answer',
	templateUrl: './answer.component.html',
	styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

	@Input('answer') answer: any;
	
	public upvoted: boolean = false;
	public downvoted: boolean = false;

	constructor() {}

	ngOnInit() {
	}

	public upvote(){
		this.answer.upvotes = + this.answer.upvotes +1;
		if(this.downvoted) this.answer.downvotes = + this.answer.downvotes -1;
		this.upvoted = true;
		this.downvoted = false;
	};
	public downvote(){
		this.answer.downvotes = + this.answer.downvotes +1;
		if(this.upvoted) this.answer.upvotes = + this.answer.upvotes -1;
		this.upvoted = false;
		this.downvoted = true;
	};
}

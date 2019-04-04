import {Injectable} from '@angular/core';

import {ajax} from 'rxjs/ajax';
import {map, catchError,filter} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	public questions:Array<any>=[];

	constructor(
	) {}

	public findAll(){
		const endpoint = 'https://api.myjson.com/bins/dck5b';
		return ajax.getJSON(endpoint).pipe(
			map( ({feed_questions}) => feed_questions.map( question =>{
				return {
					id: question.Id,
					text: question.Text,
					upvotes:question.upvotes||0,
					downvotes:question.downvotes||0
				};
			} )),
			catchError(error => error)
		);
	}
	
	public findOne(id){
		const endpoint = 'https://api.myjson.com/bins/dck5b';
		return ajax.getJSON(endpoint).pipe(
			map( ({feed_questions}) => feed_questions.map( question =>{
				return {
					id: question.Id,
					text: question.Text,
					upvotes:question.upvotes,
					downvotes:question.downvotes
				};
			} )),
			map( questions =>{
				let filteredQuestions = questions.filter( question=> question.id===id );
				
				if(filteredQuestions.length>0) return filteredQuestions[0];
				return {};
			} ),
			catchError(error => error)
		);
	};
}

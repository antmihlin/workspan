import {Injectable} from '@angular/core';

import {ajax} from 'rxjs/ajax';
import {map, catchError} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AnswerService {

	constructor() {}

	public findAll(questionId) {
		const endpoint = 'https://api.myjson.com/bins/hildr';
		return ajax.getJSON(endpoint).pipe(
			map( ({feed_answers}) => feed_answers.map( answer =>{
				return {
					id: answer.Id,
					questionId:answer['Question-Id'],
					text: answer.Answer,
					upvotes:answer.upvotes||0,
					downvotes:answer.downvotes||0,
					createdAt:answer['created_at'],
					createdBy:answer['created_by']
				};
			} )),
			map( answers =>{
				return answers.filter( a=>{
					return a.questionId ===questionId;
				} );				
			} ),
			catchError(error => error)
		);
	}

}

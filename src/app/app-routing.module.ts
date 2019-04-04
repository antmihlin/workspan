import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// General pages
import {QuestionListComponent} from './features/question-list/question-list.component';
import {QuestionComponent} from './features/question/question.component';

const routes: Routes = [
	{ path: '', redirectTo: 'question', pathMatch: 'full' },
	{path: 'question', component: QuestionListComponent},
	{path: 'question/:id', component: QuestionComponent},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

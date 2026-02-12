import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
	selector: 'app-projects-list',
	standalone: true,
	imports: [ProjectCardComponent],
	template: `
		<div class="projects-list">
			<h2>Projetos</h2>
			<div class="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-15">
				<app-project-card />
				<app-project-card />
				<app-project-card />
				<app-project-card />
				<app-project-card />
				<app-project-card />
			</div>
		</div>
	`,
	styles: `
		.projects-list {
			padding: 16px;
		}
		.projects-list h2 {
			margin-top: 0;
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 1rem;
		}
	`,
})
export class ProjectsListComponent {}
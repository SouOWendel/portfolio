import { Component } from '@angular/core';
import { ProjectsListComponent } from './components/projects-list/projects-list';
import { HeroComponent } from './components/hero/hero';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProjectsListComponent, HeroComponent],
	template: `
		<app-hero></app-hero>
		<app-projects-list></app-projects-list>
	`,
	styles: ``,
})
export class HomeComponent {}
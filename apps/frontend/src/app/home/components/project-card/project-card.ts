import { Component } from '@angular/core';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [],
	template: `
		<div class="project-card">
			<img src="https://www.anabolio.com/_assets/v11/833d1ef80b086a04fc4e703a14d4444ab87541b1.png" alt="Project Image"
			 class="project-card-image object-cover"/>
			<div class="project-card-content mt-6 flex flex-col gap-2">
				<div class="flex items-center gap-4 mb-1">
					<h3 class="text-2xl font-semibold mt-0">Design System</h3>
					<span class="px-2 border border-gray-300 rounded-2xl text-sm uppercase font-medium text-gray-500">Case Study</span>
				</div>
				<p class="text-gray-400 leading-6 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat at massa sit
					 amet hendrerit. Suspendisse accumsan nibh et dolor luctus..</p>
			</div>
		</div>
	`,
	styles: `
		.project-card-image {
			width: 100%;
			border-radius: 12px;
		}
	`,
})
export class ProjectCardComponent {}
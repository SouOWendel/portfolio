import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithubAlt, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-hero',
	standalone: true,
	imports: [FontAwesomeModule],
	template: `
	<div class="flex flex-row">
		<div class="flex flex-col gap-6 py-16 px-4">
			<div class="hero-socials flex flex-row gap-4 mb-4">
				<a href="#" target="_blank" class="text-gray-700 hover:text-blue-600 transition-colors">
					<fa-icon [icon]="faLinkedinIn" size="2x"/>
				</a>
				<a href="#" target="_blank" class="text-gray-700 hover:text-gray-900 transition-colors">
					<fa-icon [icon]="faGithubAlt" size="2x"/>
				</a>
				<a href="#" target="_blank" class="text-gray-700 hover:text-indigo-600 transition-colors">
					<fa-icon [icon]="faDiscord" size="2x"/>
				</a>
				<a href="#" target="_blank" class="text-gray-700 hover:text-pink-600 transition-colors">
					<fa-icon [icon]="faInstagram" size="2x"/>
				</a>
			</div>
			<h1 class="text-4xl font-bold mt-0">Oi, sou o Wendel!</h1>
			<div class="flex flex-col gap-2">
				<h2 class="text-xl text-gray-400">Designer de produtos digitais</h2>
				<h3 class="text-xl text-gray-500">Apaixonado por criar experiências incríveis para usuários e negócios.</h3>
			</div>
		</div>
	</div>
	`,
	styles: ``,		
})
export class HeroComponent {
	 faLinkedinIn = faLinkedinIn;
	 faGithubAlt = faGithubAlt;
	 faDiscord = faDiscord;
	 faInstagram = faInstagram;
}
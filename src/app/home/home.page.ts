import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Idea } from './idea.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  payloadUrl = 'https://raw.githubusercontent.com/xCmac/high-ideas/master/ideas.json';

  ideas: Idea[];
  currentIdea: Idea;
  isShowingIdea = true;

  constructor(private http: HttpClient) {
    this.http.get(this.payloadUrl).toPromise().then(r => {
      this.ideas = r as Idea[];
      this.refreshIdeaClick();
    });
  }

  refreshIdeaClick() {
    console.log('Loading New Idea....');
    const randomElement = this.ideas[Math.floor(Math.random() * this.ideas.length)];
    this.currentIdea = randomElement;
    console.log(this.currentIdea);
  }

  addIdeaClick() {
    console.log('Add Idea Clicked');
  }

  submitIdeaClick() {
    this.isShowingIdea = false;
    console.log('Submitting Idea Click');
  }

  actuallySubmitIdeaClick() {
    this.isShowingIdea = true;
  }

  cancelSubmitIdeaClick() {
    this.isShowingIdea = true;
  }
}

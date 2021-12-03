import { Component } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'lbk-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      src: 'assets/images/illustration-grow-together.svg',
      name: 'Grow Together',
      description:
        'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    },
    {
      src: 'assets/images/illustration-flowing-conversation.svg',
      name: 'Flow Conversations',
      description:
        "You wouldn't paginate a conversation in real life., so why do it online? Our threads have just-in-time loading for a more natural flow.",
    },
    {
      src: 'assets/images/illustration-your-users.svg',
      name: 'Your Users',
      description:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in, your users can start chatting immediately.",
    },
  ];
}

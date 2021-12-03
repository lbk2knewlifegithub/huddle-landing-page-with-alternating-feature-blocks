import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuildYourCommunityComponent } from './build-your-community/build-your-community.component';
import { FeatureCardComponent } from './features/feature-card/feature-card.component';
import { FeaturesComponent } from './features/features.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    IntroComponent,
    // features
    FeatureCardComponent,
    FeaturesComponent,
    BuildYourCommunityComponent,
  ],
})
export class HomeModule {}

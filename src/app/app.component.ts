import { Component } from '@angular/core';
import { IWeather} from './shared/model/weather.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-project';
}

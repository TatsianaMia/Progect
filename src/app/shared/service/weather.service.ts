import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = "56fdcc69764bfb192e09a583ef73e6a9";
const API_URL= "https://api.openweathermap.org/data/2.5/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}

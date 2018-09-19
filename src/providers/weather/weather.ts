import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
	apiKey = '8ab181b8b9701af8';
	url;

	constructor(public http: HttpClient) {
		this.url =
			'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
	}

	getWeather(city, state) {
		return this.http
			.get(this.url + state + '/' + city + '.json');
	}
}

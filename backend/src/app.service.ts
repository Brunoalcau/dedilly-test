import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { transformDataToArrayOfObjects } from './helper/transformDataToArrayOfObjects';
import { calculateCondition } from './helper/calculateCondition';


@Injectable()
export class AppService {
  constructor(private http: HttpService) { }

  search(search: string) {
    return this.http.get(`https://geocode.maps.co/search?q=${search}`).pipe(map((rest) => rest.data));
  }

  getMeteorology(latitude: string, longitude: string) {
    const uri = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weathercode,apparent_temperature_max,apparent_temperature_min,temperature_2m_min,apparent_temperature_max,precipitation_probability_max,windspeed_10m_max&timezone=auto&forecast_days=5`;
    return this.http.get(uri).pipe(
      map((rest) => {
        const daily = transformDataToArrayOfObjects(rest.data.daily).map((item) => ({
          ...item,
          probability: calculateCondition(Number(item.precipitation_probability_max)),
        }))
        return {
          ...rest.data,
          daily
        };
      }));
  }
}

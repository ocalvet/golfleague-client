import {WEATHER_UPDATED} from './types';
export const updateWeather = weather => ({type: WEATHER_UPDATED, weather});
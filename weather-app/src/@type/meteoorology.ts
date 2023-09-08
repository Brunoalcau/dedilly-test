export type Daily = {
    time: string;
    apparent_temperature_max: number;
    apparent_temperature_min: number;
    precipitation_probability_max: number;
    windspeed_10m_max: number;
    probability: string;
}


export type Meteoorology = {
    class: string;
    display_name: string;
    importance: number;
    lat: string;
    licence: string;
    lon: string;
    osm_id: number;
    place_id: number;
    daily: [Daily]
}
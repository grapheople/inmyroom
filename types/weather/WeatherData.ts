export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
    }[];
    coord: {
        lat: number;
        lon: number;
    };
}
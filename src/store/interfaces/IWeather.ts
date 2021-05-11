enum Condition {
    STORM = 'STORM',
    SNOW = 'NEVE',
    HAIL = 'GRANIZO',
    RAIN = 'CHUVA',
    FOG = 'NEBLINA',
    CLEAR_DAY = 'DIA LIMPO',
    CLEAR_NIGHT = 'NOITE LIMPA',
    CLOUD = 'NUBLADO',
    CLOUDLY_DAY = 'NUBLADO DE DIA',
    CLOUDLY_NIGHT = 'NUBLADO DE NOITE',
    NONE_DAY = 'Erro ao obter, mas está de dia',
    NONE_NIGHT = 'Erro ao obter, mas está de noite',
}

export interface Forecast {
    date: string
    weekday: string
    max: number
    min: number
    description: string
    condition: Condition
}

export interface Results {
    temp: number
    date: string
    time: string
    condition_code: string
    description: string
    currently: string
    cid: string
    city: string
    humidity: number
    wind_speedy: string
    sunrise: string
    sunset: string
    condition_slug: Condition
    city_name: string
    forecast: Forecast[]
    latitude: number
	longitude: number
}

export interface WeatherResponse {
    by: string
	valid_key: boolean
    results: Results
    execution_time: number
	from_cache: boolean
}
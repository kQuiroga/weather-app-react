import transformForecast from './../services/transformForecast';

export const SET_CITY = `SET_CITY`;
export const SET_FORECAST_DATA = `SET_FORECAST_DATA`;

const setCity = payload => ({ type: SET_CITY,  payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const api_key = '5b782212ca4cdc307e9da4b84fc82095';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        
        // Activate in the state a sign for searching data
        dispatch(setCity(payload))

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // Modify state with result of the promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }))
            }
        );
    };
};


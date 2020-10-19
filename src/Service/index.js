import baseService from './baseService';
const API_ID = 'e403a5a5f562cc6e20d38fb329ee4738';

export const getWeatherByCity = (city) => {
    return baseService.get(`/weather?q=${city}&units=metric&appid=${API_ID}`);
};
  
import axios from "axios";

const API_KEY = `390365ee-6fda-4377-a456-29e791d45ff6`;

export const getListHolidays = year => {
  const COUNTRY = "BR";
  const URL = `https://getfestivo.com/v1/holidays?api_key=${API_KEY}&country=${COUNTRY}&year=${year}`;
  return axios.get(URL);
};

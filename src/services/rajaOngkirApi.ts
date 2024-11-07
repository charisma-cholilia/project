import axios from 'axios';

const apiKey = '7c7ae15e88781e1c2a6cf5f18b63c880';
const baseURL = 'https://api.rajaongkir.com/starter';

// Define the types for the response data
interface Province {
  province_id: string;
  province: string;
}

interface City {
  city_id: string;
  city_name: string;
  province_id: string;
}

export const rajaOngkirApi = axios.create({
  baseURL,
  headers: {
    key: apiKey
  }
});

// Get provinces with error handling
export const getProvinces = async (): Promise<Province[]> => {
  try {
    const response = await rajaOngkirApi.get('/province');
    return response.data.rajaongkir.results;
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error; // You can handle the error further up the chain
  }
};

// Get cities by province ID with error handling
export const getCities = async (provinceId: string): Promise<City[]> => {
  try {
    const response = await rajaOngkirApi.get(`/city?province=${provinceId}`);
    return response.data.rajaongkir.results;
  } catch (error) {
    console.error(`Error fetching cities for province ${provinceId}:`, error);
    throw error; // You can handle the error further up the chain
  }
};

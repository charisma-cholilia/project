import React, { useEffect, useState } from 'react';
import { getCities } from '../services/rajaOngkirApi';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #333;

  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
`;

interface City {
  city_id: string;
  city_name: string;
}

interface CityListProps {
  provinceId: string;
}

const CityList: React.FC<CityListProps> = ({ provinceId }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (provinceId) {
      setLoading(true);
      getCities(provinceId).then((data) => {
        setCities(data);
        setLoading(false);
      });
    }
  }, [provinceId]);

  if (loading) return <p>Loading cities...</p>;

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.city_id}>{city.city_name}</li>
      ))}
    </ul>
  );
};

export default CityList;

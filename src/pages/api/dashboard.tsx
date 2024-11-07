import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CityList from '../../components/CityList';

const Dashboard = () => {
  const router = useRouter();
  const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <CityList provinceId="5" /> {/* Contoh provinceId */}
    </div>
  );
};

export default Dashboard;

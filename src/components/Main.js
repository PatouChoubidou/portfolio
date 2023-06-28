import '../App.css';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';


export function Main() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default Main;
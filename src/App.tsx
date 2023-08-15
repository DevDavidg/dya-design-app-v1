import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { SearchProvider } from './contexts/searchContext';
import AppRoutes from './pages/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <AppRoutes />
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

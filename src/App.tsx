import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import AppRoutes from './pages/routes';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchNav = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onSearchNav={handleSearchNav} />
        <AppRoutes searchQuery={searchQuery} />
      </BrowserRouter>
    </>
  );
}

export default App;

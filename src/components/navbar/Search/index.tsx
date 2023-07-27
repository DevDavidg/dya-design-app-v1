import React, { useState, useEffect } from 'react';
import './styles.scss';

interface SearchDropdownProps {
  onClose: () => void;
  isClosed: boolean;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (shouldRender) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(true);
      }, 50);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [shouldRender]);

  const handleSearch = () => {
    console.log(`Realizando búsqueda: ${searchQuery}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    const timer = setTimeout(() => {
      setIsDropdownOpen(false);
      onClose();
      setIsClosing(false);
      setShouldRender(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <label htmlFor="searchInput">Búsqueda:</label>
      <input
        id="searchInput"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchDropdown;

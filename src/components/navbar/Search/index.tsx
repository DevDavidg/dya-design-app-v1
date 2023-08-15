import React, { useState, useEffect } from 'react';
import { useSearchContext } from '../../../contexts/searchContext';
import './styles.scss';

interface SearchDropdownProps {
  onClose: () => void;
  isClosed: boolean;
  onSearch: (searchQuery: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  onClose,
  onSearch,
}) => {
  const { searchQuery, setSearchQuery } = useSearchContext();
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

  const handleSearch = (currentQuery: string) => {
    if (onSearch) {
      onSearch(currentQuery);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
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
    <div
      className={`dropdown ${isDropdownOpen ? 'open' : ''} ${
        isClosing ? 'closing' : ''
      }`}
    >
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <label htmlFor="searchInput">Búsqueda:</label>
      <input
        id="searchInput"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        autoComplete="off"
      />
      <button onClick={() => handleSearch(searchQuery)}>Buscar</button>
    </div>
  );
};

export default SearchDropdown;

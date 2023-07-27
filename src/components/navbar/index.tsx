import React, { useState } from 'react';
import './styles.scss';
import SearchDropdown from './Search/index';

interface Route {
  label: string;
  path?: string;
  dropdown?: boolean;
  class?: string;
}

export const Navbar: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleRouteChange = (route: string, event: React.MouseEvent) => {
    if (route === '#Search') {
      event.preventDefault();
      setIsDropdownOpen(true);
      setActiveRoute(route);
    } else {
      setActiveRoute(route);
      setIsDropdownOpen(false);
    }
  };

  const handleCloseDropdown = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDropdownOpen(false);
      setActiveRoute('');
      setIsClosing(false);
    }, 300);
  };

  const routes: Route[] = [
    { label: 'New Arrivals', path: '#NewArrivals' },
    { label: 'Shop', path: '#Shop' },
    { label: 'About Us', path: '#AboutUs' },
    { label: 'D&A Designs', class: 'title' },
    { label: 'Search', path: '#Search', dropdown: true },
    { label: 'Account', path: '#Account' },
    { label: 'Cart', path: '#Cart' },
  ];

  return (
    <div className="navbar">
      <div className="navbar__links">
        <ul>
          {routes.map((route) => {
            const isActiveRoute = activeRoute === route.path;
            const isDropdown = route.dropdown;
            const isDesignLabel = route.label === 'D&A Designs';
            const routeClass = route.class ? route.class : '';
            const chevronClass = isDropdownOpen ? 'down' : 'up';

            return (
              <li
                key={route.label}
                className={`${isActiveRoute ? 'active' : ''} ${routeClass}`}
                onClick={(event) => handleRouteChange(route.path ?? '', event)}
              >
                {isDropdown ? (
                  <>
                    <a href={route.path}>{route.label}</a>
                    <span className={`chevron ${chevronClass}`} aria-hidden="true"></span>
                  </>
                ) : (
                  <>
                    {isDesignLabel ? (
                      <span className={routeClass}>{route.label}</span>
                    ) : (
                      <>
                        <a href={route.path}>{route.label}</a>
                        {isActiveRoute && <div className="indicator"></div>}
                      </>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {isDropdownOpen && (
        <SearchDropdown
          onClose={handleCloseDropdown}
          isClosed={isClosing}
        />
      )}
    </div>
  );
};

export default Navbar;

import React, { useMemo, useState } from 'react';
import './styles.scss';
import SearchDropdown from './Search/index';
import CartDropdown from './Cart';

interface Route {
  label: string;
  path?: string;
  dropdown?: boolean;
  class?: string;
}

export interface NavbarProps {
  onSearchNav?: (searchQuery: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchNav }) => {
  const [activeRoute, setActiveRoute] = useState('');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isSearchChevronOpen, setIsSearchChevronOpen] = useState(false);
  const [isCartChevronOpen, setIsCartChevronOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleRouteChange = (route: string, event: React.MouseEvent) => {
    if (route === '#Search') {
      event.preventDefault();
      setIsSearchDropdownOpen(true);
      setIsCartDropdownOpen(false); // Cerrar el dropdown de cart
      setActiveRoute(route);
      setIsSearchChevronOpen(true);
      setIsCartChevronOpen(false); // Cerrar el chevron de cart
    } else if (route === '#Cart') {
      event.preventDefault();
      setIsCartDropdownOpen(true);
      setIsSearchDropdownOpen(false);
      setActiveRoute(route);
      setIsCartChevronOpen(true);
      setIsSearchChevronOpen(false);
    } else {
      setActiveRoute(route);
      setIsSearchDropdownOpen(false);
      setIsCartDropdownOpen(false);
      setIsSearchChevronOpen(false);
      setIsCartChevronOpen(false);
    }
  };

  const handleCloseDropdowns = () => {
    setIsClosing(true);
    setIsSearchDropdownOpen(false);
    setIsCartDropdownOpen(false);
    setIsSearchChevronOpen(false);
    setIsCartChevronOpen(false);
    setActiveRoute('');
    setTimeout(() => {
      setIsClosing(false);
    }, 300);
  };

  const handleSearchQuery = (searchQuery: string) => {
    if (onSearchNav) {
      onSearchNav(searchQuery);
    }
  };

  const cartProducts = useMemo(
    () => ['Product 1', 'Product 2', 'Product 3'],
    []
  );

  const isSearchDropdownChevronOpen =
    isSearchDropdownOpen && isSearchChevronOpen;
  const isCartDropdownChevronOpen = isCartDropdownOpen && isCartChevronOpen;

  const getChevronClass = (
    isDropdown: boolean,
    isDropdownOpen: boolean,
    routeLabel: string
  ) => {
    if (isDropdown && isDropdownOpen) {
      return 'down';
    } else if (!isDropdown && routeLabel === activeRoute) {
      return 'up';
    } else {
      return 'up';
    }
  };

  const renderDropdownContent = (route: Route) => {
    if (route.label === 'Search' && isSearchDropdownOpen) {
      return (
        <SearchDropdown
          onSearch={handleSearchQuery}
          onClose={handleCloseDropdowns}
          isClosed={isClosing}
        />
      );
    } else if (route.label === 'Cart' && isCartDropdownOpen) {
      return (
        <CartDropdown products={cartProducts} onClose={handleCloseDropdowns} />
      );
    } else {
      return null;
    }
  };

  const renderDropdown = (route: Route) => {
    if (route.label === 'Search' && isSearchDropdownOpen) {
      return renderDropdownContent(route);
    }
    if (route.label === 'Cart' && isCartDropdownOpen) {
      return renderDropdownContent(route);
    }
    return null;
  };

  const routes: Route[] = [
    { label: 'New Arrivals', path: '#NewArrivals' },
    { label: 'Shop', path: '#Shop' },
    { label: 'About Us', path: '#AboutUs' },
    { label: 'D&A', class: 'title' },
    { label: 'Search', path: '#Search', dropdown: true },
    { label: 'Account', path: '#Account' },
    { label: 'Cart', path: '#Cart', dropdown: true },
  ];

  return (
    <div className="navbar">
      <div className="navbar__links">
        <ul>
          {routes.map((route) => {
            const isActiveRoute = activeRoute === route.path;
            const isDesignLabel = route.label === 'D&A';
            const routeClass = route.class ?? '';

            let chevronClass = 'up';
            if (route.dropdown) {
              const isSearchOrCartDropdown =
                (route.label === 'Search' && isSearchDropdownChevronOpen) ||
                (route.label === 'Cart' && isCartDropdownChevronOpen);

              chevronClass = getChevronClass(
                true,
                isSearchOrCartDropdown,
                route.label
              );
            } else if (route.label === activeRoute) {
              chevronClass = getChevronClass(
                false,
                route.label === 'Search' ? isSearchDropdownChevronOpen : false,
                route.label
              );
            }

            return (
              <li
                key={route.label}
                className={`${isActiveRoute ? 'active' : ''} ${routeClass}`}
                onClick={(event) => handleRouteChange(route.path ?? '', event)}
              >
                {route.dropdown ? (
                  <>
                    <a href={route.path}>{route.label}</a>
                    <span
                      className={`chevron ${chevronClass}`}
                      aria-hidden="true"
                    ></span>
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
      {routes.map((route) =>
        route.dropdown ? (
          <React.Fragment key={route.label}>
            {renderDropdown(route)}
          </React.Fragment>
        ) : null
      )}
    </div>
  );
};

export default Navbar;

import React from 'react';
import { IndexPage } from './index';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

const AppRoutes = ({ searchQuery }: { searchQuery: string }) => {
  const [searchQueryState, setSearchQueryState] = React.useState('');

  React.useEffect(() => {
    setSearchQueryState(searchQuery);
  }, [searchQuery]);

  return (
    <Routes>
      <Route
        path="/"
        element={<IndexPage onSearchIndex={searchQueryState} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

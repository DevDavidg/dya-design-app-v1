import React from 'react';
import CardMain from '../components/cards';
import Hero from '../components/hero';

export const IndexPage = ({ onSearchIndex }: { onSearchIndex: string }) => {
  const [searchQueryState, setSearchQueryState] = React.useState('');

  React.useEffect(() => {
    setSearchQueryState(onSearchIndex);
  }, [onSearchIndex]);

  return (
    <>
      <Hero />
      indexPage
      <CardMain onSearchCard={searchQueryState} />
    </>
  );
};

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import Icon from '../../img/icon-search.svg';
import { currentTheme } from '../../utils/getCurrentTheme';
import { Wrapper, SearchIcon, Input, Button, ErrorSpan } from './SearchWrapperElements';

export const SearchWrapper = () => {
  const [appState, actions] = useAppContext();
  const { theme, hasError } = appState;
  let isMounted = useRef(true);
  const inputRef = useRef('');

  useEffect(() => {
    if (isMounted.current) {
      actions.GetGitHubUser('octocat');
    }

    return () => {
      isMounted.current = false;
    };
  }, [actions]);

  return (
    <Wrapper light={currentTheme(theme)}>
      <SearchIcon src={Icon} />
      <Input type={'text'} ref={inputRef} light={currentTheme(theme)} placeholder={'Search GitHub username...'} />
      {hasError && <ErrorSpan>No results</ErrorSpan>}
      <Button onClick={() => actions.GetGitHubUser(inputRef.current.value)}> Search</Button>
    </Wrapper>
  );
};

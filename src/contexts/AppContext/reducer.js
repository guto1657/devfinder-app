import { dateFormatter } from '../../utils/dateFormatter';
import * as ActionTypes from './actions-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CHECK_SAVED_THEME: {
      let savedTheme = localStorage.getItem('theme');

      if (savedTheme == null || savedTheme == undefined) {
        // it checks what systemTheme the user have
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark');
        if (systemTheme.matches) {
          localStorage.setItem('theme', 'dark');
          return { ...state, theme: 'dark' };
        } else {
          localStorage.setItem('theme', 'light');
          return { ...state, theme: 'light' };
        }
      }

      return { ...state, theme: savedTheme };
    }

    case ActionTypes.TOGGLE_THEME: {
      let theme = state.theme;

      if (theme === 'light') {
        theme = 'dark';
      } else {
        theme = 'light';
      }

      localStorage.setItem('theme', theme);

      return { ...state, theme };
    }

    case ActionTypes.SEARCH_GITHUB_USER_ASYNC_START: {
      return { ...state, loading: true, hasError: false };
    }

    case ActionTypes.SEARCH_GITHUB_USER_ASYNC_END: {
      console.log(action.payload);
      const data = action.payload;

      const joinedDate = dateFormatter(data.created_at);

      const user = {
        name: data.name,
        nickname: data.login,
        url: data.avatar_url,
        bio: data.bio,
        joined: joinedDate,
        social: {
          twitter: data.twitter_username,
          location: data.location,
          blog: data.blog,
          company: data.company,
        },
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
      };
      return { ...state, user, loading: false, hasError: false };
    }

    case ActionTypes.SEARCH_GITHUB_USER_ASYNC_ERROR: {
      return { ...state, loading: false, hasError: true };
    }
  }
  return state;
};

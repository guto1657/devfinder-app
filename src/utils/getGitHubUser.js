import * as actionsTypes from '../contexts/AppContext/actions-types';

export const GetGitHubUser = async (dispatch, userName) => {
  dispatch({ type: actionsTypes.SEARCH_GITHUB_USER_ASYNC_START });

  try {
    const userDataRaw = await fetch(`https://api.github.com/users/${userName}`);
    if (userDataRaw.status === 404) {
      dispatch({ type: actionsTypes.SEARCH_GITHUB_USER_ASYNC_ERROR });
    }

    if (userDataRaw.status === 200) {
      const userJson = await userDataRaw.json();
      dispatch({ type: actionsTypes.SEARCH_GITHUB_USER_ASYNC_END, payload: userJson });
    }
  } catch (e) {
    dispatch({ type: actionsTypes.SEARCH_GITHUB_USER_ASYNC_ERROR });
    throw new Error('oops something went wrong! error: ' + e.message);
  }
};

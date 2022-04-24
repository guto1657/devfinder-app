import { GetGitHubUser } from '../../utils/getGitHubUser';
import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    CheckAppTheme: () => dispatch({ type: actionTypes.CHECK_SAVED_THEME }),
    ToggleAppTheme: () => dispatch({ type: actionTypes.TOGGLE_THEME }),
    GetGitHubUser: (user) => GetGitHubUser(dispatch, user),
  };
};

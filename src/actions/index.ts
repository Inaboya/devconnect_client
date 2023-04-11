import { ActionType } from './actionType';

export interface RegisterUserSuccessAction {
  type: ActionType.REGISTER_USER_SUCCESS;
  payload: string[];
}

export interface RegisterUserFailAction {
  type: ActionType.REGISTER_USER_FAIL;
  error: string | null;
}

export interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: string[];
}

export interface LoginUserFailAction {
  type: ActionType.LOGIN_USER_FAIL;
  error: string;
}

export type Action =
  | RegisterUserSuccessAction
  | RegisterUserFailAction
  | LoginUserSuccessAction
  | LoginUserFailAction;

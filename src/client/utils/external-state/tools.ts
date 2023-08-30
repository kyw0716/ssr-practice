import { useSyncExternalStore } from 'react';

import StateManager from './StateManager';
import type { DataObserver, SetStateCallbackType } from './StateManager';

export const store = <T>(initialState: T) => {
  const stateManager = new StateManager<T>(initialState);

  return stateManager;
};

export const useExternalState = <T>(
  store: DataObserver<T>
): [T, (param: SetStateCallbackType<T> | T) => void] => {
  const { subscribe, getState, setState, getServerState } = store;
  const state = useSyncExternalStore(subscribe, getState, getServerState);

  return [state, setState];
};

export const useSetExternalState = <T>(store: DataObserver<T>) => {
  const { setState } = store;

  return setState;
};

export const useExternalValue = <T>(store: DataObserver<T>) => {
  const { subscribe, getState, getServerState } = store;
  const state = useSyncExternalStore(subscribe, getState, getServerState);

  return state;
};

export const getStoreSnapshot = <T>(store: DataObserver<T>) => {
  return store.getState();
};

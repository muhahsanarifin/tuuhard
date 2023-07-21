import * as storage from "../types/storageTypes";

export const setItemLocalStorage = ({ key, value }: storage.ParamsLocal) =>
  localStorage.setItem(key, value);

export const getItemLocalStorage = ({ key }: storage.ParamsLocal) =>
  localStorage.getItem(key);

export const removeItemLocalStorage = ({ key }: storage.ParamsLocal) =>
  localStorage.removeItem(key);

import { createEvent, createStore } from "effector";

export const checkAdminRole = createEvent();

export const $isAdminRole = createStore(false)
  .on(checkAdminRole, isAdmin => isAdmin = true)
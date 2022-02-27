import { createEvent, createStore } from "effector";

export const checkUserRole = createEvent();

export const $isUserRole = createStore(false)
  .on(checkUserRole, isAdmin => isAdmin = true)
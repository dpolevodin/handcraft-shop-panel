import {createEvent, createStore} from "effector";
export * from './admin/index'
export * from './user/index'


export const $users = createStore([
  {
    "username": "user1",
    "password": "user1"
  },
  {
    "username": "user2",
    "password": "user2"
  },
  {
    "username": "user3",
    "password": "user3"
  },
])

export const setCurrentUser = createEvent<string>();

export const $currentUser = createStore('')
  .on(setCurrentUser, (state, user) => user)
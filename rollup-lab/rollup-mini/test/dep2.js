import { add } from './dep1.js';

export const log = () => {
  add(1, 2);
  console.log(123);
};

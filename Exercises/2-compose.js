'use strict';

const compose = (...fns) => (x) => {
  const holder = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const n = fns.length - 1;
    let res = x;
    try {
      for (let i = n; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const i of holder) {
        i(error);
      }
      return null;
    }
  };
  composed.on = (name, holder) => {
    if (name === 'error') holder.push(i);
  };
  return composed;
};

module.exports = { compose };

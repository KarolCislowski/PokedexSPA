/* eslint-disable no-nested-ternary */

/* key have to be the STRING */
export const sortUp = (arr, key) => (
  arr.sort((a, b) => ((a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)))
)

export const sortDown = (arr, key) => (
  arr.sort((a, b) => ((a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0)))
)
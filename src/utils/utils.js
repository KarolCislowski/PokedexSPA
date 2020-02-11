/* eslint-disable no-nested-ternary */

/* key have to be the STRING */
export const sortUp = (arr, key) => (
  arr.sort((a, b) => ((a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)))
)

export const sortDown = (arr, key) => (
  arr.sort((a, b) => ((a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0)))
)

export const imagesName = (size, number) => {
  if (number < 10) {
    return `/img/${size}/00${number}.png`
  } else if (number < 100) {
    return `/img/${size}/0${number}.png`
  } else {
    return `/img/${size}/${number}.png`
  }
}
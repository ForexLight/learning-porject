import { css } from 'styled-components'

const sizes = {
    uhd: 1960,
    widescreen: 1366,
    desctop: 1024,
    tablet: 769
}

export default Object.keys(sizes).reduce((acc, label) => {
    // @ts-ignore
    acc[label] = (...args: any) => css`
    @media (min-width: ${sizes[label]}px) {
      // @ts-ignore
      ${css(...args)};
    }
  `
    console.log(acc)
    return acc
});

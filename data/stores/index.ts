//also, switch favicon & ThemeColors
import bighornTheme from './bighorn'
import foghornTheme from './foghorn'

//TODO favicon: https://coderrocketfuel.com/article/add-favicon-images-to-a-next-js-website

// const theme = {
//   'www.bhooc.com': bighornTheme,
//   'www.foghorn.com': foghornTheme,
// }[window?.location?.host] || foghornTheme

// note for translating my mentors awesome code upgrade after he saw mine below.
let theme = foghornTheme
if(typeof(window) != "undefined") {
  if (window.location.href.includes("bhooc")){
    theme = bighornTheme
    //TODO: still needs to magically switch favicon & ThemeColors in scss.
  }
}

export default theme

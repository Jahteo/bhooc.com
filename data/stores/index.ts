//also, switch favicon & ThemeColors
import bighornTheme from './bighorn'
import foghornTheme from './foghorn'

let theme = foghornTheme
if(typeof window != "undefined") {
  if (window.location.pathname.includes("bhooc")){
    theme = bighornTheme
    //TODO: still needs to magically switch favicon & ThemeColors.
  }

}

export default theme

//also, switch favicon & ThemeColors
import bighornTheme from './bighorn'
import foghornTheme from './foghorn'

let theme = foghornTheme
if(typeof window != "undefined") {
  if (window.location.pathname.includes("bhooc")){
    console.log("aha, it worked at least this far!!!")
    theme = bighornTheme
    //TODO: still needs to magically switch favicon & ThemeColors.
  }
}

export default theme

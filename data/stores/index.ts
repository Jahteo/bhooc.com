//also, switch favicon & ThemeColors
import bighornTheme from './bighorn'
import foghornTheme from './foghorn'

let theme = foghornTheme
console.log(" typeof window != 'undefined'", console.log(typeof window != "undefined") )
console.log(" typeof(window) != 'undefined'", console.log(typeof(window) != "undefined") )
if(typeof(window) != "undefined") {
  if (window.location.pathname.includes("bhooc")){
    console.log("aha, it worked at least this far!!!")
    theme = bighornTheme
    //TODO: still needs to magically switch favicon & ThemeColors.
  }
}

export default theme

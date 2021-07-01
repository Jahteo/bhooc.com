//also, switch favicon & ThemeColors
import bighornTheme from './bighorn'
import foghornTheme from './foghorn'

let theme = foghornTheme
console.log("Outer: window.location.href.includes('bhooc')", window.location.href.includes("bhooc") )
if(typeof(window) != "undefined") {
  console.log("Middle: window.location.href.includes('bhooc')", window.location.href.includes("bhooc") )
  if (window.location.href.includes("bhooc")){
    console.log("Inner: window.location.href.includes('bhooc')", window.location.href.includes("bhooc") )
    console.log("aha, it worked at least this far!!!")
    theme = bighornTheme
    //TODO: still needs to magically switch favicon & ThemeColors.
  }
}

export default theme

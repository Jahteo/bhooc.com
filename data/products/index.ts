import type { Product } from '../../types/Product'
//protip: fill imports & products with terminal on folder, then `ls -1` to get list of all files.

// import garlicOil from './garlicOil'
// import lemonOil from './lemonOil'
import oils from './oils'
import vinegars from './vinegars'

const products: Product[] =
  oils.concat(vinegars)

export default products
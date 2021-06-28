import { createContext, useState, useEffect, useContext } from 'react'

import Client from 'shopify-buy';

const Context = createContext<{
  checkout: ShopifyBuy.Cart | undefined,
  setCheckout: (checkout: ShopifyBuy.Cart) => void,
    } | undefined>(undefined)

const client = Client.buildClient({
  storefrontAccessToken: '6b6b815a6c22888be0186ed85ecb3b98',
  domain: 'bhooclite.myshopify.com'
});

// client.product.fetchAll().then((res) => {
//   console.log(res.map((product) => [
//     product.title,
//     product.variants[0].id
//   ]))
// });

export const ShopifyProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const [checkout, setCheckout] = useState<ShopifyBuy.Cart>()

  useEffect(() => {
    const checkoutId = localStorage.getItem("shopify: checkoutId")
    if(checkoutId) {
      client.checkout.fetch(checkoutId).then((res) => {
        setCheckout(res);
      }).catch((e) => {
        client.checkout.create().then((res) => {
          setCheckout(res);
          localStorage.setItem("shopify: checkoutId", res.id as string)
        });
      });
    } else {
      client.checkout.create().then((res) => {
        setCheckout(res);
        localStorage.setItem("shopify: checkoutId", res.id as string)
      });
    }
  }, [])

  return(
    <Context.Provider value={{checkout, setCheckout}}>
      {children}
    </Context.Provider>
  )
}

export function useLineitems(): Client.LineItem[] | undefined {
  const { checkout } = useContext(Context) || {}
  return checkout?.lineItems
}
//functions stored on client.checkout
//data stored on checkout

export function useCart(): {
  // addProduct: (variantId: string, quantity: number) => Promise<void>
  addProduct: (prodList: {shopifyId: string, quantity: number}[]) => Promise<void>[]
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>
  deleteProduct: (lineItemtId: string) => Promise<void>
  pay: () => void
  } {
  const { checkout, setCheckout } = useContext(Context) || {}

  const addProduct = (
    // shopifyId: string, quantity: number
    // | {shopifyId: string, quantity: number}[]
    prodList: {shopifyId: string, quantity: number}[]
  ) => {
    if(!checkout || !prodList) {
      throw new Error("No Checkout")
    }
    // return client.checkout.addLineItems(checkout.id, [{variantId: shopifyId, quantity}]).then(res => {
    //   setCheckout && setCheckout(res)
    // });
    //now if adding multiple items,
    return prodList.map(({shopifyId, quantity}) => {
      return client.checkout.addLineItems(checkout.id, [{variantId: shopifyId, quantity}]).then(res => {
        setCheckout && setCheckout(res)
      });
    })
  }

  const updateQuantity = (lineItemId: string, quantity: number) => {
    if(!checkout) {
      throw new Error("No Checkout")
    }
    return client.checkout.updateLineItems(checkout.id, [{id: lineItemId, quantity}]).then(res => {
      setCheckout && setCheckout(res)
    });
  }

  const deleteProduct = (lineItemId: string) => {
    if(!checkout) {
      throw new Error("No Checkout")
    }
    return client.checkout.removeLineItems(checkout.id, [lineItemId]).then(res => {
      setCheckout && setCheckout(res)
    });
  }

  const pay = () => {
    if(!checkout) {
      throw new Error("No Checkout")
    }

    //@ts-ignore: webUrl is not defined in shopify types
    window.open(checkout.webUrl)
  }

  return { addProduct, updateQuantity, deleteProduct, pay }
}
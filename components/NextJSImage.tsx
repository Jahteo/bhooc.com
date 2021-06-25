import Image from 'next/image'

export default function NextJSImage (img: string, name: string): JSX.Element {
  //todo: remove http option after unsplash is gone
  if (img.includes("http")) {
    return <img src={img}></img>
  } else if (img == "") {
    return <Image src="/images/recipes/norecipeImg.jpg" height={200} width={200} layout="responsive" alt="No Image"></Image>
  } else {
    return <Image src={img} height={200} width={200} layout="responsive" alt={name}></Image>
  }
}
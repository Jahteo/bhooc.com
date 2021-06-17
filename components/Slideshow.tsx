import 'react-slideshow-image/dist/styles.css'
import React from 'react';
// import { ImgSlide, Slide } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';

//  Todo: Fix TS errors & finish converting to a reusable component.
// const Slideshow = (...imgSlides: ImgSlide[]) : JSX.Element => {
const Slideshow = () : JSX.Element => {
  const imgSlides = [
    {url: 'https://source.unsplash.com/1600x900/?olive,oil', text: "Check out all our recipes"},
    {url: 'https://source.unsplash.com/1600x900/?olive,tree', text: "Where do our olive oils come from?"},
    {url: 'https://source.unsplash.com/1600x900/?grapes', text: "Baslamic making 101"}
  ];

  const properties = {
    // autoplay: false,
    arrows: false,
    indicators: true
  };

  return (
    <div>
      <Slide easing="ease" {...properties}>
        {imgSlides.map(({url, text}) => {
          return (
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${url})`}}>
                {/* //?? `Error: Objects are not valid as a React child` ??// */}
                <span>{text}</span>
                {/* <span>url</span> */}
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  )
};

export default Slideshow;
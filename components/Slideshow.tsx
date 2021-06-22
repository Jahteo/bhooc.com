import 'react-slideshow-image/dist/styles.css'
import React from 'react';
// import { ImgSlide, Slide } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';

//  Todo: Fix TS errors & finish converting to a reusable component.
// const Slideshow = (...imgSlides: ImgSlide[]) : JSX.Element => {
const Slideshow = () : JSX.Element => {
  const imgSlides = [
    {url: 'https://source.unsplash.com/1600x900/?olive,oil', header: "What's for dinner?", text: "Check out all our recipes"},
    {url: 'https://source.unsplash.com/1600x900/?olive,tree', header: "Location, Location, Location", text: "Where do our olive oils come from?"},
    {url: 'https://source.unsplash.com/1600x900/?grapes', header: "Grapes & Barrels", text: "Baslamic making 101"}
  ];

  const properties = {
    // autoplay: false,
    arrows: false,
    indicators: true
  };

  return (
    <div>
      <Slide easing="ease" {...properties}>
        {imgSlides.map(({url, header, text}) => {
          return (
            <div className="each-slide">
              <div style={{backgroundColor: "grey", backgroundImage: `url(${url})`}}>
                {/* //?? `Error: Objects are not valid as a React child` ??// */}
                <div style={{
                  boxShadow: "inset 0px 1px 0px 0px #ffffff",
                  background: "linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%)",
                  borderRadius: "6px",
                  border: "1px solid #dcdcdc",
                  padding: "10px 24px",
                  // text-decoration:none,
                  textShadow:"0px 1px 0px #ffffff",
                  backgroundColor: "#fff",
                  opacity: .9,
                  lineHeight: "normal"
                }}>
                  <h2>{header}</h2>
                  <p>{text}</p>
                  <ul
                    className="actions"
                    style={{textAlign: "center"}}
                  >
                    <li><a href="#" className="button icon solid">Continue Reading</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  )
};

export default Slideshow;
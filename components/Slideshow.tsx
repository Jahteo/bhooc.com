import React from 'react';
// import { ImgSlide, Slide } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';


const Slideshow = ({imgSlides}
  : {imgSlides: {url: string, header: string, text: string}[]}
)
  : JSX.Element => {

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
            <div className="each-slide" key={url}>
              <div
                id="banner"
                style={{
                  backgroundColor: "grey",
                  backgroundImage: `url(${url})`,
                  // padding: "0 20%",
                  paddingBottom: "0",
                }}>
                <div className="container"
                  style={{
                    width: "100%",
                    color: "#000000",
                    // background: "#6B6C6F",
                    background: "#fff",
                    backgroundColor: "#fff",
                    padding: "10px 24px",
                    // // textDecoration:none,
                    opacity: .8,
                    lineHeight: "normal",
                  }}>
                  <h2 style={{color: "#393838"}}>{header}</h2>
                  <h3 style={{color: "#393838"}}>{text}</h3>
                  {/* <ul
                    className="actions"
                  >
                    <li><a href="#" className="button icon solid">Continue Reading</a></li>
                  </ul> */}
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
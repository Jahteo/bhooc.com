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
            <div className="each-slide">
              <div style={{
                backgroundColor: "grey",
                backgroundImage: `url(${url})`,
                padding: "0 20%",
              }}>
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
                  lineHeight: "normal",
                }}>
                  <h2 className="centered">
                    <strong>{header}</strong>
                  </h2>
                  <p className="centered">
                    <strong>{text}</strong>
                  </p>
                  {/* <ul
                    className="actions"
                    style={{textAlign: "center"}}
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
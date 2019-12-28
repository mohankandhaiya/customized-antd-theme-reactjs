import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Icon, Row, Col } from "antd";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        height: "40px",
        width: "25px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        height: "40px",
        width: "25px"
      }}
      onClick={onClick}
    />
  );
}

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      arrows: false,
      //                       autoplay: true,
      infinite: true,
      //                       speed: 500,
      slidesPerRow: 8,
      //                       slidesToShow: 1,
      //                       slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className={"image-carousel"}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg"
              }
            />
          </div>
        </Slider>
        <div onClick={this.next} className={"right-arrow"}>
          <Icon type="right" />
        </div>
        <div onClick={this.previous} className={"left-arrow"}>
          <Icon type="left" />
        </div>
      </div>
    );
  }
}

export default ImageCarousel;

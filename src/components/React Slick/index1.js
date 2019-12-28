import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Icon} from "antd";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", height: "40px", width: "25px"  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", height: "40px", width: "25px"  }}
            onClick={onClick}
        />
    );
}

export default class Responsive extends Component {

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
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 8,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className={'image-carousel'}>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SL1024_.jpg'} />
                    </div>
                    <div>
                        <img src={'https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SL1024_.jpg'} />
                    </div>
                </Slider>
                <div onClick={this.next} className={'right-arrow'}>
                    <Icon type="right" />
                </div>
                <div onClick={this.previous} className={'left-arrow'}>
                    <Icon type="left" />
                </div>
            </div>
        );
    }
}
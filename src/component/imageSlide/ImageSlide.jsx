import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimeRange from "../timeRange/TimeRange";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../assets/one1.jpg";
import two from "../../assets/one2.jpg";
import three from "../../assets/one3.jpg";
import four from "../../assets/one4.jpg";
import { Carousel } from "react-responsive-carousel";

const ImageSlide = () => {
  const images = [
    {
      img: one,
      category: "Oil and gas exploration service ",
      title: "Resources that power industries worldwide",
      read: "Read More ",
    },
    {
      img: two,
      category: "Drilling services ",
      title: "Maximise Recovery. minimise environmental footprint  ",
      read: "Read More ",
    },
    {
      img: three,
      category: "Production service ",
      title: "installation and maintenance of production platforms and equipment  ",
      read: "Read More ",
    },
    {
      img: four,
      category: "Supply and management ",
      title: "How can we engineer a better future ",
      read: "Read More ",
    },
  ];

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <Carousel
          autoPlay={true}
          autoFocus={true}
          emulateTouch={true}
          infiniteLoop={true}
          interval={8000}
          showArrows={false}
          transitionTime={3000} // Adjust transition time
          swipeable={true} // Enable swiping for smoother transition
          stopOnHover={false} // Continue autoplay on hover
          showIndicators={false} // Hide indicators for cleaner look
          showThumbs={false} // Hide thumbnail images
        >
          {images.map((image, index) => (
            <div
              key={index}
              className=" carousel-slide  h-[100vh]  text-white relative transition-opacity duration-1000 ease-in-out  flex flex-col justify-between "
              style={{
                backgroundImage: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)), url(${image.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            {/* <div className="flex flex-col justify-between "> */}
              <div>
                <Nav />
              </div>
              <div className="max-w-[71rem] m-auto">
                <h4 className="text-start  mt-8 font-medium text-sm uppercase font-section-one ">
                  {image.category}
                </h4>
                <h1 className="pro-font text-6xl tracking-wider capitalize mt-8 text-start  w-3/4">
                  {image.title}
                </h1>
                <div className="flex mt-14 gap-4 items-center">
                  {/* <h5 className="  text-start font-section-one font-medium text-lg">{image.read}</h5> */}
                  {/* <div className="">
              <WhiteArrow />
            </div> */}
                </div>
              </div>
              <div className=" flex gap-6 -mt-[120px]  justify-center ">
                <TimeRange
                  item={one}
                  newData={image.img}
                  content={"Oil and gas exploration service"}
                />
                <TimeRange
                  item={two}
                  newData={image.img}
                  content={"Drilling services"}
                />
                <TimeRange
                  item={three}
                  newData={image.img}
                  content={"Production service"}
                />
                <TimeRange
                  item={four}
                  newData={image.img}
                  content={"Supply and management"}
                />
              </div>
            {/* </div> */}
            </div>
          ))}
        </Carousel>
      </Slider>
    </div>
  );
};

export default ImageSlide;

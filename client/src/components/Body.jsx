import React, { useState } from "react";
import RenderStates from "./RenderStates";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media,
  Jumbotron,
} from "reactstrap";
import { Fade, Stagger } from "react-animation-components";

const items = [
  {
    src: "https://miro.medium.com/max/4800/1*vmVhljCV8m3OLbmYPl4AGA.jpeg",
    caption: "Chadar Trek in Ladakh",
    altText: "Chadar Trek in Ladakh is the thrilling experience one can have",
  },
  {
    src:
      "https://media.cntraveller.in/wp-content/uploads/2020/09/Bir-Billing-866x487.jpg",
    caption: "Bir-Billing",
    altText:
      "The hills and the climate make Bir-Billing the perfect spot to go paragliding",
  },
  {
    src: "https://wallpapercave.com/wp/wp4528703.jpg",
    altText:
      "Manali is a township located in the northern state of Himachal Pradesh and is a popular tourist destination",
    caption: "Manali",
  },
  {
    src: "./public/images/image1.jpg",
    altText:
      "The unforgettable landscapes of Meghalaya will stay in your heart, long after your journey is over",
    caption: "Meghalaya",
  },
];

const Body = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ color: "black" }}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ height: "auto", width: "100%", opacity: "0.95" }}
        />
        <CarouselCaption
          className="text-seconary"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const states = props.states.map((state) => {
    return (
      <Fade in key={state._id}>
        {" "}
        <RenderStates state={state} />
        <br />
      </Fade>
    );
  });
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <main>
        <div style={{ marginTop: "25px", height: "50%", marginBottom: "40px" }}>
          <Carousel
            className="carousel"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div style={{ textAlign: "center" }}>
          <Jumbotron style={{ textAlign: "center" }}>
            <h1 className="display-2">INDIA {"  "}</h1>
            <p className="lead">
              <strong>India is a land of Unity in Diversity,</strong>{" "}
            </p>
            <hr className="my-2" />
            <p>
              India, country that occupies the greater part of South Asia. Its
              capital is New Delhi, built in the 20th century just south of the
              historic hub of Old Delhi to serve as India’s administrative
              centre. Its government is a constitutional republic that
              represents a highly diverse population consisting of thousands of
              ethnic groups and likely hundreds of languages.With roughly
              one-sixth of the world’s total population, India is the second
              most populous country, after China.
            </p>
          </Jumbotron>
        </div>
        <div
          className="row row-content"
          style={{
            backgroundColor: "rgba(232, 223, 220, 0.8)",
            margin: "40px",
          }}
        >
          <div className="col-7">
            <h1
              style={{
                margin: "40px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Top Tourist states in India
            </h1>
          </div>
          <div className="col-12">
            <Media list>
              <Stagger in>{states}</Stagger>
            </Media>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;

import React from "react";
import { useState, useRef, useEffect } from "react";
import data from "./data.json";

const OurServices = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current["scrollLeft"] =
        2 * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10">
      <section className="carousel my-12 mx-auto font-poppins">
        <div className="py-8 text-center">
          <h2 className="text-gray-600 font-extrabold text-3xl ">
            Nuestros Servicios
          </h2>
          <p className=" text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            voluptates!
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-emerald-600/75 bg text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-emerald-600/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {data.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  className=" carousel-item text-center relative w-52 h-64 snap-center "
                >
                  <div className="carousel-img relative w-52 h-52 ">
                      <a
                        href={resource.link}
                        className="h-full w-full aspect-square rounded-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                        style={{
                          backgroundImage: `url(${resource.imageUrl || ""})`,
                        }}
                      >
                        <img
                          src={resource.imageUrl || ""}
                          alt={resource.title}
                          className="w-full aspect-square hidden "
                        />
                      </a>
                      <a
                        href={resource.link}
                        className="h-full w-full aspect-square rounded-full block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-emerald-600/75 z-10"
                      >
                        <h3 className="text-white py-6 px-3 mx-auto text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {resource.title}
                        </h3>
                      </a>
                  </div>
                  <h1 className="text-gray-600 font-extrabold text-xl">{resource.profession}</h1>
                  <p className="text-gray-500">{resource.description}</p>
          
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;

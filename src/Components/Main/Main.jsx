import React, { useEffect } from "react";

import "./main.css";
import "./main.scss";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

//import images
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgsrc: img,
    destTitle: "Kasmir",
    location: "Kasmir",
    grade: "CULTURAL RELAX",
    fees: "$2200",
    description:
      "Picturesque and enchanting, Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty.",
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: "Bordeaux Nouvelle-Aquitaine",
    location: "France",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. ",
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description:
      "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!",
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: "Egypt",
    location: "Egypt",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "Egypt, country located in the northeastern corner of Africa. Egypt's heartland, the Nile River valley and delta, was the home of one of the principal civilizations of the ancient Middle East and, like Mesopotamia farther east, was the site of one of the world's earliest urban and literate societies.",
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: "Tambon Ko Kut",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: "$1200",
    description:
      "Thailand tourism has everything a tourist could ask for, from an international holiday destination including, Gren-blue clean beaches, coral islands, mountains, shopping markets, Hindu temples, monasteries and never ending nightlife.",
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: "Cusco",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$1800",
    description:
      "Peru is the third largest country in South America, after Brazil and Argentina. It is made up of a variety of landscapes, from mountains and beaches to deserts and rain forests.",
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: "London",
    location: "England",
    grade: "CULTURAL RELAX",
    fees: "$3000",
    description:
      "Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters",
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: "Darjeeling",
    location: "WestBengal",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Darjeeling is situated on a long, narrow mountain ridge of the Sikkim Himalayas that descends abruptly to the bed of the Great Rangit River",
  },
  {
    id: 9,
    imgsrc: img9,
    destTitle: "Tajmahal",
    location: "Delhi",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description:
      "Delhi, city and national capital territory, north-central India.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgsrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="containent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

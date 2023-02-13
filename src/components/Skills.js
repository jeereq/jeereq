
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter2 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>Mes compétences </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter2} alt="level of skill" />
                  <h5>Frontend Developpement web et mobile </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="level of skill" />
                  <h5>Backend Developpement</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="level of skill" />
                  <h5>Fullstack developpeur</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background " />
    </section>
  )
}

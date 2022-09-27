import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                        <h2>.Skills()</h2>
                        <p>Jeg har altid været nysgerrig, hvilket er endt ud i diverse kompetencer.<br></br> - Dog er der også brugbare egenskaber i blandt.<br></br>Jeg anser mig selv som lærevillig, ivrig og med blod på tanden efter nye udfordringer. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Python [Selenium, Scrapy, Zyte]</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Adobe [Photoshop, Illustrator, XD]</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Wordpress & Elementor</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>SOME</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>SEO</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Adobe Premiere Pro</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

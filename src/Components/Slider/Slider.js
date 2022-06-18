import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import img1 from "../../images/dog-712050__480.jpg"
import img2 from "../../images/snow-3114601__480.jpg"
import img3 from "../../images/nature-3352820__480.jpg"
function Slider() {
    return (
        <div className='mt-5'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="caruselImg"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dog frost snow winter</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caruselImg"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Snow winter cold frost</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caruselImg"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Nature outdoors mammals</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
}

export default Slider;



import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './slideimage.css';
function SlideImage(){
    return(
        <div className="pt-3">
             <Carousel>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>i like this food and more dishes and also like ....</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://restaurantclicks.com/wp-content/uploads/2021/10/indian-cuisine.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/8746403/pexels-photo-8746403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/7363753/pexels-photo-7363753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/12669951/pexels-photo-12669951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    
        </div>
    )

}
export default SlideImage
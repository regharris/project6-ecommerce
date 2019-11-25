import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const Home = (props) => {

    return (
        <div className='Home'>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            class="d-block w-100"
                            src="https://images.unsplash.com/photo-1521823557102-529508ac809e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            class="d-block w-100"
                            src="https://images.unsplash.com/photo-1552519507-848ebd4028d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            class="d-block w-100"
                            src="https://images.unsplash.com/photo-1522120177514-2b16ebe5634d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <section id="quote">
                    The fact is I don't drive just to get from A to B. I enjoy feeling the
					car's reactions, becoming part of it. -Enzo Ferrari
      </section>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1506268380-e97dbfd5e51f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2304&q=80"
                        width="230"
                        height="280"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>PoWer Club </b>
                        </h5>
                        <p className="card-text">
                            Subscribe to "PoWer CLUB" here we connect like-minded enthusiast
							together, you will recieve shared discounts and oth promotions
          </p>
                        <button href="/products" className="explore-button">
                            Explore
          </button>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1557411255-28ebcc0fdd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        width="230"
                        height="280"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>Performance Parts</b>
                        </h5>
                        <p className="card-text">
                            Take your performance to the next level with our certified
							performance part guaranteed to take your build to the next level.
          </p>
                        <button href="/products" className="explore-button">
                            Explore
          </button>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="https://i.pinimg.com/originals/dd/0d/d1/dd0dd1dfe8c6820822c36bb575d1fb94.jpg"
                        width="230"
                        height="280"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>Exterior Styling</b>
                        </h5>
                        <p className="card-text">
                            Take your build to a whole other level with our jaw dropping
							exterior modifications.
          </p>
                        <button href="/products" className="explore-button">
                            Explore
          </button>
                    </div>
                </div>
                <section id="description">
                    Here at PoWer LaB we believe that everyone can achieve their ideal
					"perfect build". We supply the highest quality auto parts that are
					available in the United States. We are dedicated and provide 24 hour
					customer service to all customers. THANK YOU ! for visiting power lab,
					be sure to subscribe for all updates, discounts and more!
      </section>
            </div>

        </div>






    )

}

export default Home
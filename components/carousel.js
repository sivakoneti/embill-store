import { Carousel } from 'react-bootstrap';
export default function carousel() {
    return (
        <Carousel className="pt-12">
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel2.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel4.jpg"
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}
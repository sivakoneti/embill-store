import { Carousel } from 'react-bootstrap';
export default function carousel() {
    return (
        <Carousel className="pt-6">
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel1.webp"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel2.webp"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel3.webp"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-screen h-1/2"
                    src="/images/carousel4.webp"
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}
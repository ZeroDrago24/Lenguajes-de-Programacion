import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [{
        src: 'https://via.placeholder.com/800x400',
        altText: 'Lenguajes de Programación',
        caption: 'Explora la historia y usos de los lenguajes de programación'
    },
    {
        src: 'https://via.placeholder.com/800x400',
        altText: 'Python',
        caption: 'Python: Versátil y popular'
    },
    {
        src: 'https://via.placeholder.com/800x400',
        altText: 'JavaScript',
        caption: 'JavaScript: Esencial para la web'
    }
];

function CarouselComponent() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

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
        return ( <
            CarouselItem onExiting = {
                () => setAnimating(true) }
            onExited = {
                () => setAnimating(false) }
            key = { item.src } >
            <
            img src = { item.src }
            alt = { item.altText }
            className = "d-block w-100" / >
            <
            CarouselCaption captionText = { item.caption }
            captionHeader = { item.altText }
            /> <
            /CarouselItem>
        );
    });

    return ( <
        Carousel activeIndex = { activeIndex }
        next = { next }
        previous = { previous } >
        <
        CarouselIndicators items = { items }
        activeIndex = { activeIndex }
        onClickHandler = { goToIndex }
        /> { slides } <
        CarouselControl direction = "prev"
        directionText = "Previous"
        onClickHandler = { previous }
        /> <
        CarouselControl direction = "next"
        directionText = "Next"
        onClickHandler = { next }
        /> <
        /Carousel>
    );
}

export default CarouselComponent;
import * as React from "react";
import { CarouselNode, CarouselItemNodeAttributes } from "sitebuilder.client";
import OwlCarousel from "react-owl-carousel2";

interface OwnProps {
  node: CarouselNode | null;
  boxed: false;
}

export default class Carousel extends React.Component<OwnProps, any> {
  static defaultProps = {
    boxed: false
  };
  public render() {
    const { node } = this.props;
    if (!node || !node.attributes) return;
    const slides = node.attributes.items.map(
      (item: CarouselItemNodeAttributes, idx: number) => (
        <img key={idx} src={item.src} alt={item.altText} />
      )
    );
    return (
      <OwlCarousel
        ref={node.id}
        options={{
          items: 1,
          nav: false,
          dots: true,
          rewind: true,
          autoplay: true,
          ...node.attributes.options
        }}
      >
        {slides}
      </OwlCarousel>
    );
  }
}

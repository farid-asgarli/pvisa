import Buttons from "../../components/Carousel/Buttons/Buttons";

type CarouselComponent = {
  Buttons: React.FC<{
    classes?: {
      arrows?: string;
      arrow?: string;
      leftArrow?: string;
      rightArrow?: string;
    };
  }>;
};

export const Carousel: CarouselComponent = {
  Buttons,
};

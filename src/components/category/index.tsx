import { useState, useEffect, useRef } from "react";
import {
  ButtonIcon,
  CarouselContainer,
  Container,
  InnerContainer,
} from "./styles";
import { useCategoryContext } from "../../contexts/categoryContext";
import { motion } from "framer-motion";
import LeftArrow from "../../assets/left-arrow (1).png";
import RightArrow from "../../assets/right-chevron.png";

const categoryItems = [
  { label: "All", id: "0" },
  { label: "Gaming", id: "20" },
  { label: "Music", id: "10" },
  { label: "Film & Animation", id: "1" },
  { label: "Pets & Animals", id: "15" },
  { label: "People & Blogs", id: "22" },
  { label: "Comedy", id: "23" },
  { label: "Entertainment", id: "24" },
  { label: "News & Politics", id: "25" },
  { label: "Nonprofits & Activism", id: "29" },
  { label: "Howto & Style", id: "26" },
  { label: "Vehicles", id: "2" },
  { label: "Sports", id: "17" },
  { label: "Science & Technology", id: "28" },
  { label: "Recently uploaded", id: "0" },
  { label: "Watched", id: "0" },
  { label: "New to you", id: "0" },
];

function Category() {
  const carousel = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, []);

  const handleLeftClick = () => {
    const currentScroll = carousel.current?.scrollLeft;
    carousel.current?.scrollTo({
      left: currentScroll! - carouselWidth,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    const currentScroll = carousel.current?.scrollLeft;
    carousel.current?.scrollTo({
      left: currentScroll! + carouselWidth,
      behavior: "smooth",
    });
  };

  const { setCategoryId } = useCategoryContext();

  function searchCategory(id: string) {
    setCategoryId(id);
  }

  const MotionInnerContainer = motion(InnerContainer);

  return (
    <Container ref={carousel}>
      <MotionInnerContainer
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
      >
        {categoryItems.map((categoryItem, index) => (
          <span
            onClick={() => searchCategory(categoryItem.id)}
            key={index}
            style={{
              margin:
                index === 0
                  ? "12px 12px 12px 24px"
                  : index === categoryItems.length - 1
                  ? "12px 24px 12px 0"
                  : "12px 12px 12px 0",
            }}
          >
            {categoryItem.label}
          </span>
        ))}
      </MotionInnerContainer>
    </Container>
  );
}

export default Category;

/*
  return (
    <Container ref={carousel}>
      <CarouselContainer>
        <ButtonIcon alt="" src={LeftArrow} onClick={handleLeftClick} />
      </CarouselContainer>
      <MotionInnerContainer
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
      >
        {categoryItems.map((categoryItem, index) => (
          <span
            onClick={() => searchCategory(categoryItem.id)}
            key={index}
            style={{
              margin:
                index === 0
                  ? "12px 12px 12px 24px"
                  : index === categoryItems.length - 1
                  ? "12px 24px 12px 0"
                  : "12px 12px 12px 0",
            }}
          >
            {categoryItem.label}
          </span>
        ))}
      </MotionInnerContainer>
      <CarouselContainer>
        <ButtonIcon alt="" src={RightArrow} onClick={handleRightClick} />
      </CarouselContainer>
    </Container>
  );
*/

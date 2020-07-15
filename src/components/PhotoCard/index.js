import React, { useEffect, useRef, useState, Fragment } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
import { FcLike } from "react-icons/fc";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} alt="" />
            </ImgWrapper>
          </a>
          <Button>
            <FcLike size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};

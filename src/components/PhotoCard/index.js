import React from "react";
import {ImgWrapper, Img, Button} from './styles'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
import { FcLike } from 'react-icons/fc'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} alt="" />
        </ImgWrapper>
      </a>
      <Button>
           <FcLike size='32px'/> {likes} likes!
      </Button>
    </article>
  );
};

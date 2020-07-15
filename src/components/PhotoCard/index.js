import React, { useEffect, useRef, useState, Fragment } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite,  } from "react-icons/md"
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"

import ReactPlaceholder from "react-placeholder"


export const PhotoCard = ({ id, likes = 0, src, loading }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key,false)



  
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape color="#a1a191" style={{ height:"200px", marginBottom:10}} />
      <div style={{ display:"flex", flexDirection:"row", alignItems:"center" }}>
        <RoundShape
          color="#a1a191"
          style={{ width:50, height:50, marginLeft:10, marginRight:10 }}
        />
        <TextBlock color="#a1a191" rows={1} style={{ width:120 }} />
      </div>
    </React.Fragment>
  )

  return (
    <Article ref={element}>
      {show && (
         <ReactPlaceholder
         ready={!loading}
         showLoadingAnimation={true}
         customPlaceholder={photoCardSkeleton}
       >
         <React.Fragment>
           <a href={`/?detail=${id}`}>
             <ImgWrapper>
               <Img src={src} />
             </ImgWrapper>
           </a>
           <Button onClick={() => setLiked(!liked)}>
             <Icon size="32px" /> {likes} likes!
           </Button>
         </React.Fragment>
       </ReactPlaceholder>
      )}
    </Article>
  );
};

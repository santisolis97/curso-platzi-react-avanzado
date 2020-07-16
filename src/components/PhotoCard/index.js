import React from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import {
  TextBlock,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";
import {Link} from '@reach/router'
import ReactPlaceholder from "react-placeholder";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

export const PhotoCard = ({ id, likes = 0, src, loading }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false)
  
  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape
        color="#a1a191"
        style={{ height: "200px", marginBottom: 10 }}
      />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <RoundShape
          color="#a1a191"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#a1a191" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  );

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation={true}
          customPlaceholder={photoCardSkeleton}
        >
          <React.Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  } })

                  setLiked(!liked)
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
          </React.Fragment>
        </ReactPlaceholder>
      )}
    </Article>
  );
};

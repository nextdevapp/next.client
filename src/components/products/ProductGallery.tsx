import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
    thumbnail:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
  },
  {
    original:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
    thumbnail:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
  },
  {
    original:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/4556c1b5-79f9-469d-afd6-6b19a4f07e26_1_jlyau3.webp",
    thumbnail:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/4556c1b5-79f9-469d-afd6-6b19a4f07e26_1_jlyau3.webp",
  },
  {
    original:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/29f9c569-828c-4d77-a90e-6690ef9bfda0_vpmvn1.webp",
    thumbnail:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/29f9c569-828c-4d77-a90e-6690ef9bfda0_vpmvn1.webp",
  },
  {
    original:
      "https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/fb6f7cb3-ff37-4ca6-b4a5-b71fd3af48ac_bb31vc.webp",
    thumbnail:
      " https://res.cloudinary.com/dedx6zewi/image/upload/v1650930561/fb6f7cb3-ff37-4ca6-b4a5-b71fd3af48ac_bb31vc.webp",
  },

  // {
  //   original:
  //     "https://res.cloudinary.com/dedx6zewi/image/upload/v1650948890/maxresdefault_hvpetb.jpg",
  //   thumbnail:
  //     "https://res.cloudinary.com/dedx6zewi/image/upload/v1650948890/maxresdefault_hvpetb.jpg",
  //   embedUrl: "https://www.youtube.com/watch?v=6oqOqIUVsOA",
  // },
];

const ProductGallery = () => {
  const [play, setPlay] = useState(false);

  const stopPlay = () => {
    setPlay(false);
    console.log(play);
  };

  const renderVideo = (item: any): any => {
    const opts = {
      height: "480",
      width: "890",
    };
    return (
      <div className="image-gallery-image">
        {item.embedUrl ? (
          <div className="player-wrapper">

            {/* <ReactPlayer
              className="react-player"
              url={item.embedUrl}
              width="100%"
              height={"600px"}
              playing={play}
            /> */}
          </div>
        ) : (
          <div>
            <img
              src={item.original}
              alt={item.originalAlt}
              srcSet={item.srcSet}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      infinite={true}
      renderItem={renderVideo}
      // onSlide={stopPlay}
    />
  );
};

export default ProductGallery;

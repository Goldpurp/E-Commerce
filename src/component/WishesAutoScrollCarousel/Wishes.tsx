import {
  Container,
  MarqueeContent,
  MarqueeContainer,
  PictureWrapper,
  PictureImage,
  HashtagText,
  WordsText,
  MarqueeGradientFilter,
} from "./Wishes.style";

import Img1 from "../../../public/Products/3.png";
export default function Wishes(){
  const _images = [
    {
      src: Img1,
      hashtag: "TheOGs",
      words:
        "Mika Textured Relaxed Short Sleeve",
    },
    {
      src: Img1,
      hashtag: "TheOGs",
      words:
        "Mika Textured Relaxed Short Sleeve",
    },
    {
      src: Img1,
      hashtag: "TheOGs",
      words:
        "Mika Textured Relaxed Short Sleeve",
    },
    {
      src: Img1,
      hashtag: "TheOGs",
      words:
        "Mika Textured Relaxed Short Sleeve",
    },
  ];

  const images = [..._images, ..._images];

  return (
    <Container>
      <MarqueeContainer>
        <MarqueeContent>
          {images.map((e, i) => (
            <PictureWrapper key={i}>
              <PictureImage src={e.src} alt="couple images" />
              <div
                style={{
                  left: "50%",
                  top: "70%",
                  width: "80%",
                  position: "absolute",
                  textAlign: "center",
                  transform: "translate(-50%, 0%)",
                }}
              >
                <HashtagText>{`#${e.hashtag}`}</HashtagText>
                <WordsText>
                  {e.words.length > 100
                    ? `${e.words.substring(0, 100)}...`
                    : e.words}
                </WordsText>
              </div>
          <MarqueeGradientFilter>
          </MarqueeGradientFilter>
            </PictureWrapper>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </Container>
  );
};


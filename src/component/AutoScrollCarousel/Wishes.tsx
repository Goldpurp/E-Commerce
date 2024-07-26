import {
  Container,
  MarqueeContent,
  MarqueeContainer,
  PictureWrapper,
  PictureImage,
  HashtagText,
  WordsText,
} from "./Wishes.style";
import Img1 from "../../../public/Products/2.png";
const Wishes = () => {
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

  const images = [..._images, ..._images]; // Duplicate for scrolling effect

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
            </PictureWrapper>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </Container>
  );
};

export default Wishes;

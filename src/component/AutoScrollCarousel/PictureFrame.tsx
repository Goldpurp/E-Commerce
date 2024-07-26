import { HashtagText, StyledBox, StyledImage, TextContainer, WordsText, Wrapper } from "./PictureFrame.style";


export type PictureProps ={
    words: string;
    hashtag: string;
    coupleImg: string;
  }

  const _images = [
    {
      hashtag: "TheOGs",
      words:
        "Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!",
    },
    {
      hashtag: "LetsGoFá",
      words:
        "Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!",
    },
    {
      hashtag: "MeetTheLolus",
      words:
        "Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!",
    },
    {
      hashtag: "TheIGs",
      words:
        "Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!",
    },
    {
      hashtag: "TheOGs",
      words:
        "Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!Thank you for your support. We appreciate your help and look forward to future collaborations. Stay well!",
    },
  ];

export default function Picture({ coupleImg, hashtag, words }: PictureProps){
    return (
        <Wrapper>
          <StyledBox>
            {/* Your content goes here */}
          </StyledBox>
          <StyledImage
            src={coupleImg}
            alt="couple images"
          />
          <TextContainer>
            <HashtagText>{hashtag}</HashtagText>
            <WordsText>
              {words.length > 140 ? `${words.substring(0, 140)}...` : words}
              {/* this is the text section */}
            </WordsText>
          </TextContainer>
        </Wrapper>
      );
      };



  
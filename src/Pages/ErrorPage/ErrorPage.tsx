import { IoReturnUpBackOutline } from "react-icons/io5";

import { BackBtn, ContentBox, ContentFlex, FlexContainer, Heading, InnerFlex, ListText, Text, LogoBox, Paragraph, StyledImage, SubHeading, TextContainer, ErrorImage, ErrorImageContainer, BackBrace } from "./ErrorPage.styled";


export default function ErrorPage() {
    const refreshPage = () => {
        window.location.reload();
    };
    const previousPage = () => {
        window.location.href = "/home";
    };

    return (
        <FlexContainer>
            <LogoBox>
                <StyledImage alt="logo" src="/icons/weddnlogo.svg" />
            </LogoBox>
            <ContentFlex>
                <InnerFlex>
                    <ContentBox>
                        <TextContainer>
                            <Heading>Ooops!</Heading>
                            <Text>We're not sure how you got here... but you may be lost.</Text>
                            <SubHeading>Possible Reasons</SubHeading>
                            <ListText>
                                <ul>
                                    <li>The address may have been typed incorrectly</li>
                                    <li>It may be broken or outdated</li>
                                </ul>
                            </ListText>
                            <Paragraph>Check the address and try again</Paragraph>
                            <BackBrace>
                                <IoReturnUpBackOutline />
                                <BackBtn onClick={previousPage}>go back</BackBtn>
                                <BackBtn onClick={refreshPage}>retry</BackBtn>
                            </BackBrace>
                            
                            <BackBrace>
                                <BackBtn onClick={refreshPage}>retry</BackBtn>
                            </BackBrace>
                        </TextContainer>
                    </ContentBox>
                </InnerFlex>
                <ErrorImageContainer>
                    <ErrorImage alt="logo" src="images/error.svg" />
                </ErrorImageContainer>
            </ContentFlex>
        </FlexContainer>
    );
}


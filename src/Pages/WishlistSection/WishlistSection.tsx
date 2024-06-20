import NewArrivalsCarousel from "../NewArrivalsCards/NewArrivalsCards";
import { Container, Box, HeaderText, Message, RedirectionsTexts } from "./WishlistSection.styled"

export default function WishlistSection() {
    return (
        <Container>
            <HeaderText>WishList</HeaderText>

            <Box>
                <Message>Your wishlist is empty</Message>
                <RedirectionsTexts>Discover our newest arrivals to find your perfect style</RedirectionsTexts>

                <NewArrivalsCarousel />
            </Box>

        </Container>
    );
}
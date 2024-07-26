import Wishes from "../../component/AutoScrollCarousel/Wishes";
import { Container, Box, HeaderText, Message, RedirectionsTexts } from "./WishlistSection.styled"

export default function WishlistSection() {
    return (
        <Container>
            <HeaderText>WishList</HeaderText>

            <Box>
                <Message>Your wishlist is empty</Message>
                <RedirectionsTexts>START WITH ONE OF THESE TOP SELLERS!</RedirectionsTexts>
                <Wishes/>
            </Box>

        </Container>
    );
}
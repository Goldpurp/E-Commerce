// import ProductGridList from "../ProductGridList/ProductGridList"
import ProductGallery from "../ProductGallery/ProductGallery"
import { Container, Box, HeaderText, Message, RedirectionsTexts, Buttons, ContentBrace} from "./CartSection.styled"
export default function CartSection() {
    return (
        <Container>
            <HeaderText>Cart</HeaderText>

            <Box>
                <Message>Your cart is has no item.</Message>
                <RedirectionsTexts>own an account with us? Sign in to view your cart</RedirectionsTexts>

                <Buttons>Best Sellers</Buttons>
                <Buttons>Login Account</Buttons>

                <ContentBrace>
                    
                <ProductGallery/>
                </ContentBrace>
            </Box>
            {/* <ProductGridList/> */}
        </Container>
    )
}
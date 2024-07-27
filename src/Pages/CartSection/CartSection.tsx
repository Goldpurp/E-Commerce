// import ProductGridList from "../ProductGridList/ProductGridList"
import Wishes from "../../component/WishesAutoScrollCarousel/Wishes"
import { Container, Box, HeaderText, Message, RedirectionsTexts, Buttons } from "./CartSection.styled"
export default function CartSection() {
    return (
        <Container>
            <HeaderText>Cart</HeaderText>

            <Box>
                <Message>Your cart is has no item.</Message>
                <RedirectionsTexts>Already have an account? Sign in to view your cart.</RedirectionsTexts>

                <Buttons>Best Sellers</Buttons>
                <Buttons>Login Account</Buttons>
                <Wishes />



            </Box>
        </Container>
    )
}
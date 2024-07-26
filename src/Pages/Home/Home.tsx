import { Outlet } from "react-router-dom";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Container } from "./Home.styled";

export default function Home() {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import CartSection from "../Pages/CartSection/CartSection";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import WishlistSection from "../Pages/WishlistSection/WishlistSection";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    { path: Routes.login,
        element: <Login/>
    },
    { path: Routes.signUp,
        element: <SignUp/>
    },

    {
        path: Routes.home,
        element: <Home/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            { path: Routes.cart,
                element: <CartSection/>
            },
            { path: Routes.wishlist,
                element: <WishlistSection/>
            },
            { path: Routes.helpCenter,
                element: <HelpCenter/>
            },
            { path: Routes.contactUs,
                element: <ContactUs/>
            },
        
        ]
    },
])
export default router;
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
import TrackOrder from "../Pages/TrackOrder/TrackOrder";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService/TermsOfService";
import ReturnPolicy from "../Pages/ReturnPolicies/ReturnPolicy";
import FAQ from "../Pages/FAQs/FAQ";
// import SearchModal from "../component/Search/Search";

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
            { path: Routes.trackOrder,
                element: <TrackOrder/>
            },
            { path: Routes.aboutUs,
                element: <AboutUs/>
            },
            { path: Routes.privacyPolicy,
                element: <PrivacyPolicy/>
            },
            { path: Routes.termsOfService,
                element: <TermsOfService/>
            },
            { path: Routes.returnPolicy,
                element: <ReturnPolicy/>
            },
            { path: Routes.faq,
                element: <FAQ/>
            },
            // { path: Routes.search,
            //     element: <SearchModal isOpen={false} onClose={function (): void {
            //         throw new Error("Function not implemented.");
            //     } }/>
            // },
        
        ]
    },
])
export default router;
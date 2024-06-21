import { useState } from "react";
import {
  Tabs,
  ItemLabel,
  ReactLink,
  ListBrace,
  IconToggle,
  CopyRightBrace,
  SpecialItemLabel,
  MobileNavItemSection,
  MobileNavHeaderSection,
  MobileNavContentSection,
} from "./SidebarMenu.styled";
import CopyRight from "../CopyRight/CopyRight";
export default function SidebarMenu() {
  type OpenState = {
    AllProducts: boolean;
    Clothing: boolean,
    Footwear: boolean,
    Accessories: boolean,
    Activewear: boolean,
    Undergarments: boolean,
    Swimwear: boolean,
    Sleepwear: boolean,
  };

  const [isOpenItem, setIsOpenItem] = useState({
    AllProducts: true,
    Clothing: false,
    Footwear: false,
    Accessories: false,
    Activewear: false,
    Undergarments: false,
    Swimwear: false,
    Sleepwear: false,
  });

  const toggleItemSection = (section: keyof OpenState) => {
    setIsOpenItem((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <ListBrace>
        {/* <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("AllProducts")}
          >

            <ItemLabel>All Products</ItemLabel>
            <IconToggle>{isOpenItem.AllProducts ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.AllProducts}>
            <Tabs>Men</Tabs>
            <Tabs>Women</Tabs>
            <Tabs>Kids</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection> */}

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Accessories")}
          >
            <ItemLabel>Accessories</ItemLabel>
            <IconToggle>{isOpenItem.Accessories ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Accessories}>
            <Tabs>Watches</Tabs>
            <Tabs>Sunglasses</Tabs>
            <Tabs>Hats</Tabs>
            <Tabs>Scarves</Tabs>
            <Tabs>Belts</Tabs>
            <Tabs>Ties</Tabs>
            <Tabs>Wallets</Tabs>
            <Tabs>necklaces</Tabs>
            <Tabs>bracelets</Tabs>
            <Tabs>earrings</Tabs>
            <Tabs>rings</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Clothing")}
          >
            <ItemLabel>Clothing</ItemLabel>
            <IconToggle>{isOpenItem.Clothing ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Clothing}>
            <Tabs>Shirts</Tabs>
            <Tabs>T-shirts</Tabs>
            <Tabs>Skirts</Tabs>
            <Tabs>Jeans</Tabs>
            <Tabs>Hoodies</Tabs>
            <Tabs>Suits</Tabs>
            <Tabs>Blazers</Tabs>
            <Tabs>Shorts</Tabs>
            <Tabs>Pants</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Undergarments")}
          >
            <ItemLabel>Undergarments</ItemLabel>
            <IconToggle>{isOpenItem.Undergarments ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Undergarments}>
            <Tabs>Bras</Tabs>
            <Tabs>Underwear</Tabs>
            <Tabs>Lingerie</Tabs>
            <Tabs>Socks</Tabs>
            <Tabs>Hosiery</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Footwear")}
          >
            <ItemLabel>Footwear</ItemLabel>
            <IconToggle>{isOpenItem.Footwear ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Footwear}>
            <Tabs>Sneakers</Tabs>
            <Tabs>Boots</Tabs>
            <Tabs>Slippers</Tabs>
            <Tabs>Heels</Tabs>
            <Tabs>Sandals</Tabs>
            <Tabs>Loafers</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Swimwear")}
          >
            <ItemLabel>Swimwear</ItemLabel>
            <IconToggle>{isOpenItem.Swimwear ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Swimwear}>
            <Tabs>Bikinis</Tabs>
            <Tabs>Swim trunks</Tabs>
            <Tabs> One-piece swimsuits</Tabs>
            <Tabs>Cover-ups</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Sleepwear")}
          >
            <ItemLabel>Sleepwear</ItemLabel>
            <IconToggle>{isOpenItem.Sleepwear ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Sleepwear}>
            <Tabs>Pajamas</Tabs>
            <Tabs>Nightgowns</Tabs>
            <Tabs> Robes</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <MobileNavHeaderSection
            onClick={() => toggleItemSection("Activewear")}
          >
            <ItemLabel>Activewear</ItemLabel>
            <IconToggle>{isOpenItem.Activewear ? "-" : "+"}</IconToggle>
          </MobileNavHeaderSection>
          <MobileNavContentSection isOpenItem={isOpenItem.Activewear}>
            <Tabs>Sports bras</Tabs>
            <Tabs>Leggings</Tabs>
            <Tabs>Gym shorts</Tabs>
            <Tabs>Tracksuits</Tabs>
          </MobileNavContentSection>
        </MobileNavItemSection>



        <MobileNavItemSection>
          <ReactLink to={"wishlist"}>
            <SpecialItemLabel>Wishlist</SpecialItemLabel>
          </ReactLink>
          <ReactLink to={"login"}>
            <SpecialItemLabel>Login</SpecialItemLabel>
          </ReactLink>
        </MobileNavItemSection>

        <MobileNavItemSection>
          <SpecialItemLabel>About</SpecialItemLabel>
          <SpecialItemLabel>Our Store</SpecialItemLabel>
          <SpecialItemLabel>Faq</SpecialItemLabel>
          <SpecialItemLabel>Policies</SpecialItemLabel>
          <SpecialItemLabel>Our Community</SpecialItemLabel>
        </MobileNavItemSection>
        <hr />

        <CopyRightBrace>
          <CopyRight />
        </CopyRightBrace>
      </ListBrace>
    </>
  )
}
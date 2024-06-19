import {
  DrawerContainer,
  Overlay,
  CloseButton,
  ShareLink,
  ShareIcon,
  Input,
  Share,
  SocialsBraceY,
  SocialsBrace,
  CopyBtn,
  Instagram,
  Pinterest,
  Whatsapp,
  Snapchat,
  Facebook,
  Twitter,
} from "./DrawerProductPage.styled";

type DrawerProductPageProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerProductPage = ({ isOpen, onClose }: DrawerProductPageProps) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}/>


        <Share>Share</Share>

        <SocialsBraceY>

        <SocialsBrace>
          <ShareLink>
            <ShareIcon>
              <Instagram />
            </ShareIcon>
            <span> Instagram </span>
          </ShareLink>
          <ShareLink>
            <ShareIcon>
              <Pinterest />
            </ShareIcon>{" "}
            Pinterest
          </ShareLink>
          <ShareLink>
            <ShareIcon>
              <Whatsapp />
            </ShareIcon>{" "}
            Whatsapp
          </ShareLink>
          <ShareLink>
            <ShareIcon>
              <Twitter />
            </ShareIcon>{" "}
            X
          </ShareLink>
          <ShareLink>
            <ShareIcon>
              <Snapchat />
            </ShareIcon>{" "}
            Snapchat
          </ShareLink>
          <ShareLink>
            <ShareIcon>
              <Facebook />
            </ShareIcon>{" "}
            Facebook
          </ShareLink>
      
        </SocialsBrace>
        
        <div>
          <hr />
          <Input type="text" value="https://www.product.link" readOnly />
          <CopyBtn>Copy URL</CopyBtn>
        </div>

        </SocialsBraceY>
      </DrawerContainer>
    </>
  );
};

export default DrawerProductPage;

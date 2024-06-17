import {
  DrawerContainer,
  Overlay,
  CloseButton,
  ShareLink,
  ShareIcon,
  Input,
  CopyBtn,
  Instagram,
  Pinterest,
  Whatsapp,
  Snapchat,
  Facebook,
  Twitter

} from "./DrawerProductPage.styled";


const DrawerProductPage = ({ isOpen, onClose }) => {

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <div style={{ padding: '20px' }}>
          <h2>Share This</h2>
          <Input
            type="text"
            value="https://www.product.link"
            readOnly
          />
          <CopyBtn>
            Copy URL
          </CopyBtn>
          <ShareLink>
            <ShareIcon><Instagram /></ShareIcon>
            <span> Share via Facebook </span>
          </ShareLink>
          <ShareLink>
            <ShareIcon><Pinterest /></ShareIcon> Share via Pinterest
          </ShareLink>
          <ShareLink>
            <ShareIcon><Whatsapp /></ShareIcon> Share via Twitter
          </ShareLink>
          <ShareLink>
            <ShareIcon><Snapchat /></ShareIcon> Share via Facebook
          </ShareLink>
          <ShareLink>
            <ShareIcon><Facebook /></ShareIcon> Share via Pinterest
          </ShareLink>
          <ShareLink>
            <ShareIcon><Twitter /></ShareIcon> Share via Twitter
          </ShareLink>
        </div>
      </DrawerContainer>

    </>
  );
};

export default DrawerProductPage;

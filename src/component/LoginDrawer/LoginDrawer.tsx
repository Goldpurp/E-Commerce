
import Login from "../../Pages/Login/Login";
// import SignUp from "../../Pages/SignUp/SignUp";
import {
  Overlay,
  CloseButton,
  DrawerContainer,
} from "./LoginDrawer.styled";

type LoginDrawerPageProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginDrawer({ isOpen, onClose }: LoginDrawerPageProps){
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}/>

        <Login/>
        {/* <SignUp/> */}

      </DrawerContainer>
    </>
  );
};


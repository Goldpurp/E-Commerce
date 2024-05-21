import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  margin-bottom: 30px;
  margin-left: 5px;

  @media screen and (min-width: 769px) {
    gap: 12px;
  }

  @media screen and (min-width: 1148px) {
    gap: 15px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselCards = styled.div`
  display: flex;
  background-color: #cec9cc;
  width: 120px;
  height: 180px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 1px gray;
  margin-bottom: 10px;

  @media screen and (min-width: 376px) {
    width: 140px;
    height: 210px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    height: 230px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    height: 250px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (min-width: 1148px) {
    width: 250px;
    height: 350px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222831;
  width: 100px;
  /* font-family: "Oswald", sans-serif; */
  font-size: 15px;
  margin-bottom: 3px;

  @media screen and (min-width: 376px) {
    width: 140px;
    font-size: 16px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    font-size: 18px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    font-size: 20px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    font-size: 22px;
  }

  @media screen and (min-width: 1148px) {
    width: 240px;
    font-size: 25px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;


export const ProductDetails = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222831;
  width: 100px;
  /* font-family: "Josefin Sans", sans-serif; */
  font-optical-sizing: auto;
  font-size: 13px;

  @media screen and (min-width: 376px) {
    font-size: 15px;
    width: 140px;
  }

  @media screen and (min-width: 500px) {
    width: 150px;
    font-size: 18px;
  }

  @media screen and (min-width: 601px) {
    width: 180px;
    font-size: 21px;
  }

  @media screen and (min-width: 769px) {
    width: 200px;
    font-size: 25px;
  }

  @media screen and (min-width: 1148px) {
    width: 240px;
    font-size: 28px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;


// export const Productprice = styled.h3`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   color: #222831;
//   width: 100px;
//   font-family: "Josefin Sans", sans-serif;
//   font-weight: 600;
//   font-size: 15px;
//   font-style: normal;
//   margin-top: 7px;

//   @media screen and (min-width: 376px) {
//     font-size: 18px;
//     width: 140px;
//   }

//   @media screen and (min-width: 500px) {
//     width: 150px;
//     font-size: 20px;
//   }

//   @media screen and (min-width: 601px) {
//     width: 180px;
//     font-size: 22px;
//   }

//   @media screen and (min-width: 769px) {
//     width: 200px;
//     font-size: 25px;
//     margin-top: 10px;
//   }

//   @media screen and (min-width: 1148px) {
//     width: 240px;
//     font-size: 30px;
//   }

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

export const Productprice = styled.h5`
  font-size: 16px;
  flex-wrap: wrap;
  width: 100%;
  color: #386648;
  margin: 5px 0;
  letter-spacing: 0.70px;

  @media (min-width: 768px) {
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
  }
`;

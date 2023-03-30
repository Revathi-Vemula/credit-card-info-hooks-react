// Style your elements here
import styled from 'styled-components'

export const MainPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaymentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
    height: 80vh;
    box-shadow: 0px 0px 5px 5px #d3d9e0;
  }
`

export const PageLeftPart = styled.div`
  background-color: #3b4b69;
  height: 50vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 80vh;
  }
`
export const PageRightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 50vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 80vh;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  margin-bottom: 0;
  font-family: 'Roboto';
`
export const Separator = styled.hr`
  width: 2px;
  border: solid 2px #ffd773;
  width: 25vw;
  position: relative;
  left: -2%;

  @media screen and (min-width: 768px) {
    width: 10vw;
  }
`

export const CreditCardImageContainer = styled.div`
  position: relative;
  left: 8%;
  bottom: 5%;
  border-radius: 20px;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 30vh;
  width: 80vw;
  padding: 20px;

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
    bottom: 10%;
    left: 5%;
  }
`
export const CardNumber = styled.p`
  position: relative;
  top: 15%;
  margin-bottom: 5px;
  font-size: 24px;
  color: #ffffff;
`
export const CardHolderNameHeading = styled.p`
  color: #ffffff;
  font-size: 13px;
  color: #d3d9e0;
  align-self: flex-end;
  margin-top: 60px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`
export const HolderName = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 0px;
`
export const PaymentMethodHeading = styled.h1`
  color: #3b4b69;
  font-size: 20px;
  font-family: 'Roboto';
`

export const DetailsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 5px #d3d9e0;
  border-radius: 5px;
  padding: 10px;
  height: 30vh;
  width: 80vw;

  @media screen and (min-width: 768px) {
    height: 30vh;
    width: 30vw;
  }
`
export const Input = styled.input`
  border-radius: 3px;
  border: solid 1px #c3cad9;
  height: 35px;
  width: 90%;
  margin-top: 15px;
  font-size: 13px;
  padding-left: 10px;
  outline: none;
`

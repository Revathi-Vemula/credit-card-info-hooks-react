// Write your code here
import {useState} from 'react'

import {
  MainPage,
  PaymentPage,
  PageLeftPart,
  PageRightPart,
  HeadingContainer,
  CreditCardHeading,
  Separator,
  CreditCardImageContainer,
  CardNumber,
  CardHolderNameHeading,
  HolderName,
  PaymentMethodHeading,
  DetailsInputContainer,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const onChangeCardHolderName = event => {
    // const holderName = event.target.value

    setCardHolderName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <MainPage>
      <PaymentPage>
        <PageLeftPart>
          <HeadingContainer>
            <CreditCardHeading>Credit Card</CreditCardHeading>
            <Separator />
          </HeadingContainer>
          <CreditCardImageContainer data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
            <HolderName>{cardHolderName.toUpperCase()}</HolderName>
          </CreditCardImageContainer>
        </PageLeftPart>
        <PageRightPart>
          <DetailsInputContainer>
            <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
            <Input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={onChangeCardNumber}
            />
            <Input
              type="text"
              placeholder="Cardholder Name"
              value={cardHolderName}
              onChange={onChangeCardHolderName}
            />
          </DetailsInputContainer>
        </PageRightPart>
      </PaymentPage>
    </MainPage>
  )
}

export default CreditCard

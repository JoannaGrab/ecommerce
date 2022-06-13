import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #e7e2da;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.h1`
  width: 35%;
  height: 40px;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  color: white;
  background-color: #866c47;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

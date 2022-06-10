import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 60%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BIKE.cc</Logo>
        <Desc>
          Bicycles allowed people to travel for leisure into the country, since
          bicycles were three times as energy efficient as walking and three to
          four times as fast. There are towns in some countries where bicycle
          culture has been an integral part of the landscape for generations,
          even without much official support. That is the case of Ílhavo, in
          Portugal.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Gear</ListItem>
          <ListItem>Outlet</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Rynek 1, 56-400 Olesnica,
          Poland
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@bike.cc
        </ContactItem>
        <Payment src="https://cdn.sportdirect.com/files/website-images/Stanno/StannoUK-Betaalopties-2.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;

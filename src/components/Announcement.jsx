import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #866c47;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $500</Container>;
};

export default Announcement;

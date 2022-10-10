import styled from "styled-components";

const H1 = styled.h1`
text-transform: uppercase;
`;

const P = styled.p`
text-transform: uppercase;
margin-left: 30px;
margin-top: -10px;
`;

const Hr = styled.hr`
  border: 1px solid cadetblue;
  margin-bottom: 50px; 
`;

const Header = () => {
  return (
    <div>
      <H1>Janne Ringdal</H1>
      <P> - Junior front-end developer</P>
      <Hr />
    </div>
  )
}

export default Header;
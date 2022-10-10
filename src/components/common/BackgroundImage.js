import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image:url(${props => props.img});
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default BackgroundImage;
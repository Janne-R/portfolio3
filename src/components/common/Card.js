import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Button = styled.a`
  border-radius: 5px;
  padding: 5px 20px;
  background-color: cadetblue;
  color: black;
  text-decoration-line: none;
  margin-top: auto;
  width: fit-content;
`;

const Card = ({ title, image, description, githubLink }) => {
  return (
    <Div>
      <Image src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button href={githubLink}>GitHub</Button>
    </Div>
  )
}

export default Card;
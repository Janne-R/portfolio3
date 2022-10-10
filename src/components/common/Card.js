import styled from "styled-components";

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
`;

const Card = ({ title, image, description, githubLink }) => {
  return (
    <div>
      <Image src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button href={githubLink}>GitHub</Button>
    </div>
  )
}

export default Card;
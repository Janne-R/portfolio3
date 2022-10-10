import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    object-fit: contain;
`;

const CardContainer = styled.div`
    padding: 10px;
`;

const Card = ({ title, image, description, githubLink }) => {
  return (
    <CardContainer>
      <Image src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink}>
        <button>github</button>
      </a>
    </CardContainer>
  )
}

export default Card;
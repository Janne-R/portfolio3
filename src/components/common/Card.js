import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Card = ({ title, image, description, githubLink }) => {
  return (
    <div>
      <Image src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={githubLink}>
        <button>github</button>
      </a>
    </div>
  )
}

export default Card;
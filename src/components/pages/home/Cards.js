import styled from "styled-components";
import Card from "../../common/Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
  grid-column-gap: 20px;

`;

const Cards = () => {
  return (
    <Grid>
      <Card image="images/image01.webp" title="Project exam 2" description="Holidaze is a fictional hotel website located in Bergen. This project was created to showcase what I have learned over the past two years. This was my final exam for my studies in front end delevopment." githubLink="https://github.com/Noroff-FEU-Assignments/project-exam-2-Janne-R" />
      <Card image="images/image03.webp" title="Semester project" description="Code stack is a fictional wikipage for front end development. This project was part of my semester project for the second year." githubLink="https://github.com/Janne-R/semester-project-2-new" />
      <Card image="images/image02.webp" title="JavaScript Frameworks CA" description="This project was part of the frameworks course." githubLink="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Janne-R" />
    </Grid>
  )
}

export default Cards;
import React from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
import { Github } from "../components/AllSvg";

const Box = styled.li`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Images = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  height: 50px;
    width: 50px;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid transparent;
  background-position: center center;
}
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Desription = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding: 0.5rem ;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text};
}
`;
const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);

`;
const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size: calc(1em + 0.5vw);
${Box}:hover &{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`;

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:  ${(props) => props.theme.text};;
    }
}
`

const Card = (props) => {
  //Change Info Work Data in ./data/WorkData.js
  const { id, name, description, tags, demo, icon } = props.item;

  return (
    <Box  key={id}>
      <Title>{name}</Title>
      <Desription>{description}</Desription>
      <Tags>
        {tags.map((item, id) => {
          return <Tag key={id}>#{item}</Tag>;
        })}
      </Tags>
      <Footer>
          <Link to={{pathname: `${demo}`}} target="_blank">Visit</Link>
          <Images img={icon}></Images>
      </Footer>
    </Box>
  );
};

export default Card;

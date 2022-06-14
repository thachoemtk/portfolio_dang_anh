import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponents from "../subComponents/ParticleComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcon from "../subComponents/SocialIcon";
import { Develope } from "./AllSvg";
import { lightTheme } from "./Theme";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;
  & > * {
    text-transform: capitalize;
  }
  p {
    margin-left: 2rem;
  }
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;
const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent></LogoComponent>
        <SocialIcon theme="light"></SocialIcon>
        <PowerButton them="light"></PowerButton>
        <ParticleComponents theme="light"></ParticleComponents>
        <Main>
          <Title>
            <Develope width={40} height={60} /> Fullstack Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SKILLS</strong>
            <p>
            PHP, phalcon framework.</p>
          <p>Html, Css, Sass, Bootstrap.</p>
        <p> Js, Ajax, Jquery, React/redux.</p>
              <p>My SQL, Mongo DB, GIT.</p>
          
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        
      </Box>
    </ThemeProvider>
  );
};

export default MySkillPage;

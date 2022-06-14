import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcon from "../subComponents/SocialIcon";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvg";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      if (yinyang.current != null) {
       return  yinyang.current.style.transform =
       `rotate(` + -window.pageYOffset + `deg)`;
      }
      return
    };
    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark"></LogoComponent>
        <SocialIcon theme="dark"></SocialIcon>
        <PowerButton></PowerButton>
        <Main ref={ref}>
          {Work.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text}></YinYang>
        </Rotate>
        <BigTitle text="WORK" top="10%" right="20%"></BigTitle>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;

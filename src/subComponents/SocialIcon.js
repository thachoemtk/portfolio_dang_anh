import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvg";
import { darkTheme } from "../components/Theme";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcon = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          to={{ pathname: "https://google.com" }}
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></Github>
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://https://twitter.com" }}
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></Twitter>
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://facebook.com" }}
          target="_blank"
          style={{ color: "inherit" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></Facebook>
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://youtube.com" }}
          target="_blank"
          style={{ color: "inherit" }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></YouTube>
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcon;

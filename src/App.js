import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";

//import Components
import GlobalStyle from "./globalStyle";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillPage";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillPage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

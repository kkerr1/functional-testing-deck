// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Markdown,
  Code,
  Slide,
  Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  seesaw: require("../assets/seesaw.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#333333",
  tertiary: "#666666",
  quartenary: "black"
});

theme.screen.components.codePane.pre.fontSize = "1.3rem";
const transition = ["slide", "spin"];

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={transition} transitionDuration={500}>
          <Slide transition={transition}>
            <Heading size={1} fit caps textColor="black">
              Automated Functional Testing
            </Heading>
            <Heading size={4}>
              Lessons Learned
            </Heading>
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} caps textColor="black">
              Stack
            </Heading>
            <List>
              <Appear><ListItem>Mocha &amp; Chai</ListItem></Appear>
              <Appear><ListItem>Webdriver.io</ListItem></Appear>
              <Appear><ListItem>Selenium</ListItem></Appear>
              <Appear><ListItem>Sauce Labs</ListItem></Appear>
              <Appear><ListItem>Jenkins + Sauce Connect</ListItem></Appear>
              <Appear><ListItem>Generators</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={transition}>
          <Heading size={2} textColor="black">
            Attempt 2 > Attempt 1
          </Heading>
            <Image src={images.seesaw} width="600" />
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} fit caps>Get out of the unit test mindset</Heading>
            <List>
              <Appear><ListItem>1. Perform an action</ListItem></Appear>
              <Appear><ListItem>2. Check everything you want to check</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} fit caps>Don't depend on existing markup</Heading>
            <List>
              <ListItem>Will make your tests brittle</ListItem>
              <ListItem><Code>data-auto="doSomething"</Code></ListItem>
            </List>
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} fit>waitForExist(), waitUntil, etc. are your friends</Heading>
            <List>
              <Appear><ListItem>No super reliable eventing</ListItem></Appear>
              <Appear><ListItem>Need to wait for the browser AND network traffic to catch up</ListItem></Appear>
              <Appear><ListItem><Markdown>Don't be seduced by `pause()`</Markdown></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} fit caps>Commands are neat</Heading>
            <List>
              <Appear><ListItem>Composable!</ListItem></Appear>
              <Appear><ListItem>Place your data-auto hooks here</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <CodePane lang="js"
              source={require("raw!../assets/commands.example")}
            />
          </Slide>
          <Slide transition={transition}>
            <Heading size={1} fit caps>Generators can clean up your code</Heading>
            <List>
              <Appear><ListItem>In node for awhile (v 0.11)</ListItem></Appear>
              <Appear><ListItem>Totally optional</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition="fade">
            <CodePane lang="js"
              source={require("raw!../assets/promises.example")}
            />
          </Slide>
          <Slide transition="fade">
            <CodePane lang="js"
              source={require("raw!../assets/generators.example")}
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

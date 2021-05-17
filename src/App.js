import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Shop,
  Contact,
  About,
  Arunika,
  Sasmita,
  ScrollToTop
} from "./components/index";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/shop" exact component={() => <Shop />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/product/arunika" exact component={() => <Arunika />} />
          <Route path="/product/sasmita" exact component={() => <Sasmita />} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
